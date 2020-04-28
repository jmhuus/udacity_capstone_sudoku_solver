import os
from flask import Flask, jsonify
from models import setup_db, Person, db
from flask_cors import CORS

def create_app(test_config=None):

    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    @app.route('/')
    def get_greeting():
        return "Not implemented"

    # Solve the sudoku board with DFS recursion
    @app.route('/solve', methods=["POST"])
    def get_greeting():
        board =  request.get_json()["board"]
        solver = Solver(board, 9)
        solved_grid = solver.solve()
        return jsonify(solved_grid)

    # Retrieve a board from the database
    @app.route('/get_board', methods=["POST"])
    def be_cool():

        return "Not implemented"


app = create_app()

if __name__ == '__main__':
    app.run()
