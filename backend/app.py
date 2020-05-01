import os
import json
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from models import setup_db, Person, db
from flask_cors import CORS
from solver.solver import Solver, generate_new_board


import pprint as pp


app = Flask(__name__)
setup_db(app)
CORS(app)
migrate = Migrate(app, db)


@app.route('/')
def get_greeting():
    return jsonify({
        "success": True,
        "message": "not implemented"
    }), 200


# Solve the sudoku board with DFS recursion
@app.route('/solve-board', methods=["POST"])
def solve_board():
    # Retrieve request data
    data = json.loads(request.data)

    # TODO(jordanhuus): migrate this to SudokuBoard model object
    # Solve sudoku board
    solver = Solver(data["board"], 9)
    print("Solving...")
    solved_board = solver.solve()
    print("Solve complete!!")

    return jsonify({
        "success": True,
        "solved_board": solved_board
    }), 200


# Solve the sudoku board with DFS recursion
@app.route('/board-new', methods=["POST"])
def get_new_board():
    data = json.loads(request.data)
    new_board_data = generate_new_board(data["difficulty"])
    return jsonify({
        "success": True,
        "board": new_board_data["board"],
        "solved_board": new_board_data["solved_board"]
    }), 200


# Retrieve a board from the database
@app.route('/board-get', methods=["POST"])
def get_board_from_database():
    return "Not implemented"


# Retrieve a board from the database
@app.route('/board-save', methods=["POST"])
def save_board():
    # # Retrieve board model object and save
    # data = json.loads(request.data)
    # if data["board_id"] is not None:
    #     board = SudokuBoard.query.get(data["board_id"])
    #     board.add()
    # else:
    #     board = SudokuBoard(data["board"])
    #     board.update()

    return "Not implemented"


if __name__ == '__main__':
    app.run()
