from sqlalchemy import Column, String, create_engine, Integer
from flask_sqlalchemy import SQLAlchemy
import json
import os

database_path = os.environ['DATABASE_URL']

db = SQLAlchemy()

'''
setup_db(app)
binds a flask application and a SQLAlchemy service
'''
def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()


'''
Person
Have title and release year
'''
class Person(db.Model):
    __tablename__ = 'People'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    solved_boards_count = Column(String)

    def __init__(self, name):
        self.name = name

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'solved_boards_count': self.solved_boards_count
        }

    def __repr__(self):
        return f'<Person {self.id} {self.name} {self.solved_boards_count}>'


"""
Sudoku Board
Stores boards that users have solved using this api.
"""
class SudokuBoard(db.Model):
    __tablename__ = "SudokuBoard"

    id = Column(Integer, primary_key=True)
    board_json = Column(String, nullable=False)

    def __init__(self, board_json):
        self.board_json = board_json

    def format(self):
        return {
            "id": self.id,
            "board": self.board_json
        }

    def __repr__(self):
        return f'<SudokuBoard {self.id} {self.board_json}>'
