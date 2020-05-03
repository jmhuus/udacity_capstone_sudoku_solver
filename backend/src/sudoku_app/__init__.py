import os
import json
from flask import Flask, jsonify, request
from database.models import setup_db, Person, SudokuBoard, db
from flask_cors import CORS
from solver.solver import Solver
from flask_migrate import Migrate

import pprint as pp


def create_app():
    app = Flask(__name__)
    app.config.from_pyfile("config.py")
    setup_db(app)
    CORS(app)
    migrate = Migrate(app, db, compare_type=True)


    @app.route('/')
    def get_greeting():
        print(SudokuBoard.query.first())
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
    def get_new_board():
        data = json.loads(request.data)
        board = SudokuBoard(data["difficulty"])
        board.add()
        return jsonify(board.format()), 200


    # Retrieve a board from the database
    @app.route('/board-get', methods=["POST"])
    def get_board_from_database():
        data = json.loads(request.data)
        board = SudokuBoard.query.get(data["board_id"])
        return jsonify(board.format()), 200


    # Save board progress
    @app.route('/board-save', methods=["PUT"])
    def save_board():
        # Retrieve board model object and save
        data = json.loads(request.data)
        board = SudokuBoard.query.get(data["board_id"])
        board.board_json = data["board_json"]

        print("pp.pprint(board.board_json)")
        pp.pprint(board.board_json)
        return jsonify(board.format()), 200

    return app
