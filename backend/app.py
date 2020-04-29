import os
import json
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from models import setup_db, Person, db
from flask_cors import CORS

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
    i = 1
    data = json.loads(request.data)

    print(f"printing output. This is the {i} time")
    pp.pprint(data)
    print(request.data)

    i += 1


    # board =  request.get_json()["board"]
    # solver = Solver(board, 9)
    # solved_grid = solver.solve()
    return jsonify({
        "success": True,
        "message": "not implemented, aahhhh yeeee!!"
    }), 200


# Retrieve a board from the database
@app.route('/get_board', methods=["POST"])
def be_cool():

    return "Not implemented"


if __name__ == '__main__':
    app.run()
