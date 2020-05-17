import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy
from sudoku_app import create_app
from database.models import setup_db, User, SudokuBoard
from authenticate_machine_client import get_admin_jwt_token

import pdb


class UserTestCase(unittest.TestCase):
    """This class represents the trivia test case"""

    def setUp(self):
        # Setup Flask App
        self.app = create_app()
        self.appctx = self.app.app_context()
        self.appctx.push()
        self.client = self.app.test_client

        # Setup PostgreSQL database and SQLAlchemy
        self.database_name = "capstone_sudoku_solver"
        self.database_path = "postgresql://{}/{}".format('jordanhuus@localhost:5432', self.database_name)
        setup_db(self.app)

        # Generate test authentication JWT token
        self.admin_jwt_token = get_admin_jwt_token()
        # self.user_jwt_token = get_gamer_jwt_token()

        # binds the app to the current context
        with self.appctx:
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # create all tables
            self.db.create_all()


    def tearDown(self):
        """Executed after reach test"""
        pass


    # Test Board of the day working
    def test_get_board_of_the_day_200(self):
        response = self.client().get("/board-of-the-day")
        self.assertEqual(response.status_code, 200)


    def test_board_new_200(self):
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.admin_jwt_token}"
            }
        response = self.client().post("/board-new", headers=headers)
        # data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        # self.assertEqual(data["board_id"], )


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
