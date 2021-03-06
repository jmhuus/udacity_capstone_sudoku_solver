from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy
import json
from solver.solver import generate_new_board
import pprint as pp


db = SQLAlchemy()


def setup_db(app):
    '''
    setup_db(app)
    binds a flask application and a SQLAlchemy service
    '''
    db.app = app
    db.init_app(app)
    db.create_all()


class User(db.Model):
    '''
    User
    Individual who is playing Sudoku games.
    - id is the autogenerated ID by postgreSQL
    - auth_id is the ID passed from Auth0
    '''
    __tablename__ = 'User'

    id = Column(Integer, primary_key=True)
    auth_id = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    sudoku_boards = db.relationship("SudokuBoard", backref="user")

    def __init__(self, first_name, last_name, auth_id):
        self.first_name = first_name
        self.last_name = last_name
        self.auth_id = auth_id

    def format(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name
        }

    def __repr__(self):
        return f'<User {self.id} {self.first_name} {self.last_name}>'

    def add(self):
        db.session.add(self)
        db.session.commit()


class SudokuBoard(db.Model):
    """
    Sudoku Board
    Stores boards that users have solved using this api.
    - In order to initialize a new board, a user object
      must be available.
    """
    __tablename__ = "SudokuBoard"

    id = Column(Integer, primary_key=True)
    board_json = Column(String, nullable=False)
    solved_board_json = Column(String, nullable=False)
    user_id = Column(Integer, db.ForeignKey("User.id"), nullable=False)

    def __init__(self, difficulty, user):
        self.difficulty = difficulty
        new_board = generate_new_board(self.difficulty)
        self.board_json = new_board["board"]
        self.solved_board_json = new_board["solved_board"]
        self.user_id = user.id

    def format(self):
        return {
            "board_id": self.id,
            "board_json": json.loads(self.board_json),
            "board_json_solved": json.loads(self.solved_board_json)
        }

    def update(self):
        db.session.commit()

    def add(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def __repr__(self):
        return f'<SudokuBoard {self.id} {self.user_id}>'

    def __str__(self):
        board_solved_str = pp.pformat(self.solved_board_json)
        board_str = pp.pformat(self.board_json)
        return \
            f"<SudokuBoard {self.id} {self.user_id} \n \
            board: \n \
            "+board_str+" + \n \
            solved board: \n \
            "+board_solved_str
