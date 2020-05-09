import os
import json
from flask import Flask, jsonify, request
from database.models import setup_db, User, SudokuBoard, db
from flask_cors import CORS
from solver.solver import Solver
from flask_migrate import Migrate
from auth.auth import AuthError, requires_auth
import pprint as pp


def create_app():
    app = Flask(__name__)
    app.config.from_pyfile("config.py")
    setup_db(app)
    CORS(app)
    migrate = Migrate(app, db, compare_type=True)


    @app.route('/')
    def get_greeting():
        return jsonify({
            "success": True,
            "message": "not implemented"
        }), 200


    """
    Only used to solve random board that don't exist in the database!
    Solve the sudoku board with DFS recursion.
    """
    @app.route('/solve-board', methods=["POST"])
    def solve_board():
        # Retrieve request data
        data = json.loads(request.data)
        solver = Solver(data["board_json"], 9)
        solved_board = solver.solve()
        return jsonify({
            "success": True,
            "board_json_solved": solved_board
        }), 200


    # Get a new and unique board
    @app.route('/board-new', methods=["POST"])
    @requires_auth(permission="add:sudoku")
    def get_new_board():
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

        return jsonify(board.format()), 200


    # Retrieve a board from the database
    @app.route('/board-get', methods=["POST"])
    @requires_auth(permission="get:sudoku")
    def get_board_from_database():
        data = json.loads(request.data)
        board = SudokuBoard.query.get(data["board_id"])
        return jsonify(board.format()), 200


    # Retrieve a board from the database
    @app.route('/board-get-user', methods=["POST"])
    @requires_auth(permission="get:sudoku")
    def get_user_boards_from_database():
        data = json.loads(request.data)
        user_info = data["user_info"]
        boards = SudokuBoard.query.filter(User.auth_id == user_info["id"])
        boards_data = [board.format() for board in boards]
        return jsonify(boards_data), 200


    # Save board progress
    @app.route('/board-save', methods=["PUT"])
    @requires_auth(permission="save:sudoku")
    def save_board():
        # Retrieve board model object and save
        data = json.loads(request.data)

        # Check if the user (auth_id) already exists
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

        return jsonify(boards_data), 200

    @app.route('/board-delete/<int:board_id>', methods=["DELETE"])
    @requires_auth(permission="delete:sudoku")
    def delete_board(board_id):
        # TODO(jordanhuus): migrate this functionality to auth.py and requires_auth decorator
        token = request.headers.get("Authorization", None)

        # Update the board
        board = SudokuBoard.query.get(board_id)
        board.delete()

        # Return all boards
        boards = SudokuBoard.query.filter(User.auth_id == user_info["id"])
        boards_data = [board.format() for board in boards]

        return jsonify(boards_data), 200

    return app
