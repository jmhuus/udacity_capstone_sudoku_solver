import os
import json
from flask import Flask, jsonify, request, url_for, abort, render_template
from database.models import setup_db, User, SudokuBoard, db
from flask_cors import CORS
from solver.solver import Solver
from flask_migrate import Migrate
from auth.auth import AuthError, requires_auth, verify_decode_jwt, \
    get_token_auth_header
import pprint as pp


def create_app():
    app = Flask(__name__)
    app.config.from_pyfile("config.py")
    setup_db(app)
    CORS(app)
    migrate = Migrate(app, db, compare_type=True)

    @app.route("/", methods=["GET"])
    def root():
        return render_template("index.html")

    @app.route("/help")
    def get_help():
        links = [
            "/board-new",
            "/board-get/<int:board_id>",
            "/board-get-user/<string:user_id>",
            "/board-save",
            "/board-delete/<int:board_id>",
            "/board-of-the-day",
            "/board-of-the-day-save",
        ]

        return jsonify({
            "success": True,
            "message": "Welcome to the Sudoku solver API. Start solving sudoku \
boards by calling '/solve-board'!",
            "endpoints": links
        }), 200


    # Get a new and unique board
    @app.route("/board-new/<string:difficulty>", methods=["GET"])
    @requires_auth(permission="add:sudoku")
    def get_new_board(difficulty):
        try:
            payload = verify_decode_jwt(get_token_auth_header())

            # Check if the user (auth_id) already exists
            user = None
            user_info = payload["http://www.jordanhuus.com/user_info"]
            if User.query.filter(User.auth_id == payload["sub"]).count() > 0:
                user = User.query.filter(User.auth_id == payload["sub"]).first()
            else:
                first_name = user_info["name"].split(" ")[0]
                last_name = first_name if len(user_info["name"].split(" "))==1 else user_info["name"].split(" ")[1]

                user = User(first_name, last_name, user_info["id"])
                user.add()

            # Store the newly created board
            board = SudokuBoard(difficulty, user)
            board.add()

        except KeyError as ke:
            abort(400, f"Request body is missing {ke} dictionary key.")
        except Exception as e:
            abort(500)

        return jsonify(board.format()), 200


    # Retrieve a board from the database
    @app.route("/board-get/<int:board_id>", methods=["GET"])
    @requires_auth(permission="get:sudoku")
    def get_board_from_database(board_id):
        try:
            board = SudokuBoard.query.get(board_id)
            if board is None:
                raise TypeError
        except TypeError as te:
            abort(400, f"Request to board ID {board_id} is not found.")
        except Exception:
            abort(500)

        return jsonify(board.format()), 200


    # Retrieve a board from the database
    @app.route("/board-get-user/<string:user_id>", methods=["GET"])
    @requires_auth(permission="get:sudoku")
    def get_user_boards_from_database(user_id):

        # Confirm the user_id matches the JWT claim
        payload = verify_decode_jwt(get_token_auth_header())
        token_claim_user_id = payload["sub"]
        if payload["sub"] != user_id:
            abort(401, f"Unauthorized; provided user ID, {user_id}, does not match token claim, {token_claim_user_id}.")

        try:
            boards = SudokuBoard.query.filter(User.auth_id == user_id)
            if boards.count() == 0:
                raise TypeError
            boards_data = [board.format() for board in boards]
        except TypeError as te:
            abort(401, f"Request to user boards with user ID {user_id} is not authorized.")
        except Exception:
            abort(500)

        return jsonify(boards_data), 200


    # Save board progress
    @app.route("/board-save", methods=["PATCH"])
    @requires_auth(permission="save:sudoku")
    def save_board():
        try:
            # User info
            payload = verify_decode_jwt(get_token_auth_header())
            data = json.loads(request.data)

            # Update the board
            board = SudokuBoard.query.get(data["board_id"])
            board.board_json = json.dumps(data["board_json"])
            board.update()

            # Return all boards
            boards = SudokuBoard.query.filter(User.auth_id == payload["sub"])
            boards_data = [board.format() for board in boards]

        except KeyError as ke:
            abort(400, "Request to save board is missing "+str(ke)+".")
        except Exception:
            abort(500)

        return jsonify({
            "success": True,
            "saved_board_id": board.id,
            "user_boards": boards_data
        }), 200


    @app.route("/board-delete/<int:board_id>", methods=["DELETE"])
    @requires_auth(permission="delete:sudoku")
    def delete_board(board_id):
        try:
            # User info
            payload = verify_decode_jwt(get_token_auth_header())

            # Update the board
            board = SudokuBoard.query.get(board_id)
            if board is None:
                raise TypeError
            board.delete()

            # Return all boards
            boards = SudokuBoard.query.filter(User.auth_id == payload["sub"])
            boards_data = [board.format() for board in boards]

        except TypeError as te:
            abort(400, f"Board ID {board_id} was not found.")
        except Exception as e:
            abort(500)

        return jsonify(boards_data), 200


    @app.route("/board-of-the-day", methods=["GET"])
    def get_board_of_the_day():
        try:
            # Retrieve/create fake board-of-the-day user. A user record is required
            # for an associated sudoku board
            user = User.query.filter(User.first_name == "board-of-the-day").first()
            if user is None:
                user = User("board-of-the-day", "board-of-the-day", "no-auth-id")
                user.add()

            # Retrieve/create a sudoku board of the day
            board_of_the_day = SudokuBoard.query.filter(SudokuBoard.user_id == user.id).first()
            if board_of_the_day is None:
                board_of_the_day = SudokuBoard("easy", user)
                board_of_the_day.add()

        except Exception:
            abort(500)

        return jsonify(board_of_the_day.format()), 200


    # Save board progress
    @app.route("/board-of-the-day-save", methods=["PATCH"])
    @requires_auth(permission="add:sudoku-of-the-day")
    def save_board_of_the_day():
        try:
            # User info
            payload = verify_decode_jwt(get_token_auth_header())
            data = json.loads(request.data)

            # Update the board
            board = SudokuBoard.query.get(data["board_id"])
            # TODO(jordanhuus): ensure that data["board_id"] is indeed for the Board Of The Day
            board.board_json = json.dumps(data["board_json"])
            board.update()

        except KeyError as ke:
            abort(400, "Request to save board is missing "+str(ke)+".")
        except Exception:
            abort(500)

        return jsonify({
            "success": True,
            "saved_board_id": board.id
        }), 200

    # Error Handling
    @app.errorhandler(422)
    def unprocessable_error(error):
        message = str(error) if not None else "unauthorized"
        return jsonify({
                        "success": False,
                        "error": 422,
                        "message": message
                        }), 422


    @app.errorhandler(404)
    def page_not_found_error(error):
        message = str(error) if not None else "unprocessable"
        return jsonify({
                        "success": False,
                        "error": 404,
                        "message": message
                        }), 404


    @app.errorhandler(400)
    def bad_request_error(error):
        message = str(error) if not None else "bad request"
        return jsonify({
                        "success": False,
                        "error": 400,
                        "message": message
                        }), 400


    @app.errorhandler(401)
    def unauthorized_error(error):
        message = str(error) if not None else "unauthorized"
        return jsonify({
                        "success": False,
                        "error": 401,
                        "message": message
                        }), 401


    @app.errorhandler(500)
    def internal_server_error(error):
        message = str(error) if not None else "server error"
        return jsonify({
                        "success": False,
                        "error": 500,
                        "message": message
                        }), 500


    @app.errorhandler(AuthError)
    def not_authorized_error(error):
        return jsonify({
                        "success": False,
                        "error": error.status_code,
                        "message": error.error
                        }), error.status_code

    return app
