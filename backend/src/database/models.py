from sqlalchemy import Column, String, create_engine, Integer, ARRAY
from flask_sqlalchemy import SQLAlchemy
import json
import os
from solver.solver import Solver, generate_new_board
from flask import jsonify

db = SQLAlchemy()

'''
setup_db(app)
binds a flask application and a SQLAlchemy service
'''
def setup_db(app):
    db.app = app
    db.init_app(app)
    db.create_all()


'''
User
Individual who is playing Sudoku games.
'''
class User(db.Model):
    __tablename__ = 'User'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    jwt = Column(String, nullable=True)
    sudoku_boards = db.relationship("SudokuBoard", backref="user")

    def __init__(self, first_name, last_name):
        self.name = name

    def format(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name
        }

    def __repr__(self):
        return f'<User {self.id} {self.name} {self.solved_boards_count}>'


"""
Sudoku Board
Stores boards that users have solved using this api.
"""
class SudokuBoard(db.Model):
    __tablename__ = "SudokuBoard"

    id = Column(Integer, primary_key=True)
    board_json = Column(ARRAY(Integer), nullable=False)
    solved_board = Column(ARRAY(Integer), nullable=False)
    user_id = Column(Integer, db.ForeignKey("User.id"), nullable=False)

    def __init__(self, difficulty):
        self.difficulty = difficulty
        new_board = generate_new_board(self.difficulty)
        self.board_json = new_board["board"]
        self.solved_board = new_board["solved_board"]
        self.user_id = 1

    def format(self):
        return {
            "board_id": self.id,
            "board_json": self.board_json,
            "board_json_solved": self.solved_board
        }

    def __repr__(self):
        return f'<SudokuBoard {self.id} {self.board_json}>'

    def add(self):
        db.session.add(self)
        db.session.commit()
