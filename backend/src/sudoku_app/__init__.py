import os
import json
from flask import Flask, jsonify, request, url_for, abort
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


    @app.route('/')
    def get_help():
        links = []
        def has_no_empty_params(rule):
            defaults = rule.defaults if rule.defaults is not None else ()
            arguments = rule.arguments if rule.arguments is not None else ()
            return len(defaults) >= len(arguments)
        for rule in app.url_map.iter_rules():
            # Filter out rules we can't navigate to in a browser
            # and rules that require parameters
            if "GET" in rule.methods and has_no_empty_params(rule):
                url = url_for(rule.endpoint, **(rule.defaults or {}))
                links.append((url, rule.endpoint))
            if "POST" in rule.methods and has_no_empty_params(rule):
                url = url_for(rule.endpoint, **(rule.defaults or {}))
                links.append((url, rule.endpoint))
            if "DELETE" in rule.methods and has_no_empty_params(rule):
                url = url_for(rule.endpoint, **(rule.defaults or {}))
                links.append((url, rule.endpoint))
            if "PUT" in rule.methods and has_no_empty_params(rule):
                url = url_for(rule.endpoint, **(rule.defaults or {}))
                links.append((url, rule.endpoint))

        return jsonify({
            "success": True,
            "message": "Welcome to the Sudoku solver API. Start solving sudoku \
boards by calling '/solve-board'!",
            "endpoints": [link[0] for link in links]
        }), 200


    # Get a new and unique board
    @app.route('/board-new', methods=["POST"])
    @requires_auth(permission="add:sudoku")
    def get_new_board():
        try:
            data = json.loads(request.data)

            # Check if the user (auth_id) already exists
            user = None
            user_info = data["user_info"]
            if User.query.filter(User.auth_id == user_info["id"]).count() > 0:
                user = User.query.filter(User.auth_id == user_info["id"]).first()
            else:
                user = User(user_info["name"], user_info["name"], user_info["id"])
                user.add()

            # Store the newly created board
            board = SudokuBoard(data["difficulty"], user)
            board.add()

        except KeyError as ke:
            abort(400, f"Request body is missing {ke} dictionary key.")
        except Exception as e:
            abort(500)

        return jsonify(board.format()), 200


    # Retrieve a board from the database
    @app.route('/board-get/<int:board_id>', methods=["GET"])
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
    @app.route('/board-get-user/<user_id>', methods=["GET"])
    @requires_auth(permission="get:sudoku")
    def get_user_boards_from_database(user_id):
        # TODO(jordanhuus): add request to payload from auth.py to ensure
        # that the requested user is also found in the JWT claim.

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
    @app.route('/board-save', methods=["PATCH"])
    @requires_auth(permission="save:sudoku")
    def save_board():
        try:
            data = json.loads(request.data)
            user_info = data["user_info"]
            user = None
            if User.query.filter(User.auth_id == user_info["id"]).count() > 0:
                user = User.query.filter(User.auth_id == user_info["id"]).first()
            else:
                user = User(user_info["name"], user_info["name"], user_info["id"])
                user.add()

            # Update the board
            board = SudokuBoard.query.get(data["board_id"])
            board.board_json = json.dumps(data["board_json"])
            board.update()

            # Return all boards
            boards = SudokuBoard.query.filter(User.auth_id == user_info["id"])
            boards_data = [board.format() for board in boards]

        except KeyError as ke:
            abort(400, "Request to save board is missing "+str(ke)+".")
        except Exception:
            abort(500)

        # TODO(jordanhuus): include 'success': True and 'saved_board_id': 123 and 'user_boards': boards_data
        return jsonify(boards_data), 200


    @app.route('/board-delete/<int:board_id>', methods=["DELETE"])
    @requires_auth(permission="delete:sudoku")
    def delete_board(board_id):
        try:
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


    @app.route('/board-of-the-day', methods=["GET"])
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
