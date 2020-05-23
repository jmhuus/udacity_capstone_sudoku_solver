import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy
from sudoku_app import create_app
from database.models import setup_db, User, SudokuBoard
from auth0_machine_client import get_admin_jwt_token, get_gamer_jwt_token

import pdb


class UserTestCase(unittest.TestCase):


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
        self.gamer_jwt_token = get_gamer_jwt_token()
        self.false_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJodHRwOi8vd3d3LmpvcmRhbmh1dXMuY29tL3VzZXJfaW5mbyI6eyJuYW1lIjoiam9yZGFuaHV1c3lAeWFob28uY29tIiwiaWQiOiJhdXRoMHw1ZWJiM2FlY2RjMWQyYjBjMDMzMzdlNzciLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMzMyNzEzZTE2OTMyNjFlOTdkZTdkYTg5YjQ5ZTQ2ZjE_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZqby5wbmcifSwiaXNzIjoiaHR0cHM6Ly9qb3JkYW4tZmxhc2stYXV0aGVudGljYXRpb24tcHJhY3RpY2UuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVlYmIzYWVjZGMxZDJiMGMwMzMzN2U3NyIsImF1ZCI6InN1ZG9rdS1hcGkiLCJpYXQiOjE1ODk3NDAzOTAsImV4cCI6MTU4OTgyNjc5MCwiYXpwIjoiaFRIczJsYkwyNlZESVBMTHpGZmZ1V2hzb0pJdHJZREciLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImFkZDpzdWRva3UiLCJkZWxldGU6c3Vkb2t1IiwiZ2V0OnN1ZG9rdSIsInNhdmU6c3Vkb2t1Il19.Gv9rT9TyP-LsL8PP0v0S3_6z5IVl54lHD4I_E9pDNR9hfZ0AGUX5KSPpWGEtSyTmzcc6DaVfM3k40K_F0ZkQbbqDNO9vaId639aeVoTajOsrzo6Gs79DpG60B9pSkGTPwPcJAmf0pzjtxQZAObmsWd_jH9JqOBt8UnNKZSvLM_MR_NoLNdKfFhvgYb55ykl5BaJIDiQj3aENZUOFSmbwSBToZZdmPnsIzHxIasLZeSV1H0r1cnyV4MY-DJcvdbgvwP9LgduI-vJg6NswT1TqSf-ZjC1AmGcIQn_F53zZFL5EW7zleWRIXGXukGOzi8vWerqunA-LSG8BkqatiYZgyQ"

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
    def test_get_help_endpoint_200(self):
        """Ensure the base help endpoint is working properly.
        """

        response = self.client().get("/help")
        self.assertEqual(response.status_code, 200)
        self.assertGreater(len(response.json["endpoints"]), 0)


    # Test Board of the day working
    def test_get_board_of_the_day_200(self):
        """Ensure the Board Of The Day endpoint is working properly.
        """

        response = self.client().get("/board-of-the-day")
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertGreater(data["board_id"], 0)
        self.assertEqual(len(data["board_json"]), 9)
        self.assertEqual(len(data["board_json_solved"]), 9)


    def test_board_new_200(self):
        """Ensure that creating a new board item is working properly.
        """

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().get("/board-new/easy", headers=headers)
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertGreater(data["board_id"], 0)
        self.assertEqual(len(data["board_json"]), 9)


    def test_board_new_400_missing_difficulty_key(self):
        """Ensure the endpoint handles incorrect API parameter; missing
        'difficulty' in the request route.
        """

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().get("/board-new", headers=headers)
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 404)


    def test_board_new_401_not_authorized(self):
        """Ensure that 'add:sudoku' permission is required.
        """

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.false_token}"
        }
        response = self.client().get("/board-new/easy", headers=headers)
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 401)


    def test_board_get_200(self):
        """Ensure that getting a board with correct permissions and available
        board_id is working properly.
        """

        # TEST PREP: get an existing board ID
        user_id = "a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        prep_response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        self.assertEqual(prep_response.status_code, 200)
        test_board_id = prep_response.json[0]["board_id"]

        # Main test
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().get(
            f"/board-get/{test_board_id}",
            headers=headers
        )
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertGreater(data["board_id"], 0)
        self.assertEqual(len(data["board_json"]), 9)


    def test_board_get_401_board_missing(self):
        """Ensure that requesting a board that doesn't exist throws a
        not authorized response for security reasons.
        """

        test_board_id = 10000 # Board that doesn't exist
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().get(
            f"/board-get/{test_board_id}",
            headers=headers
        )
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 400)


    def test_board_get_401_missing_permission(self):
        """Ensure that 'get:sudoku' permission is required to get a board.
        Use false token in main test.
        """

        # TEST PREP: get an existing board ID
        user_id = "a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        prep_response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        self.assertEqual(prep_response.status_code, 200)
        test_board_id = prep_response.json[0]["board_id"]

        # Main test
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.false_token}"
        }
        response = self.client().get(
            f"/board-get/{test_board_id}",
            headers=headers
        )
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 401)


    def test_board_get_user_200(self):
        """Ensure a user can request all of their boards.
        """

        user_id = "a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertGreater(len(data), 0)


    def test_board_get_user_401_user_id_not_found(self):
        """Ensure 401 whent he user_id is doesn't exist. Use random user_id.
        """

        user_id = "abcdefghijklmnopqrstuvwxyz"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        self.assertEqual(response.status_code, 401)


    def test_board_get_user_401_missing_permission(self):
        """Ensure that 'get:sudoku' permission is required to get a user's
        boards. Use false token instead.
        """

        user_id = "a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.false_token}"
        }
        response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        self.assertEqual(response.status_code, 401)


    def test_board_save_200(self):
        """Ensure /board-save endpoint is working properly.
        """

        # TEST PREP: retrieve an existing board ID
        user_id = "a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        prep_response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        self.assertEqual(prep_response.status_code, 200)
        test_board_id = prep_response.json[0]["board_id"]

        # Main test
        body = {
            "user_info":{
                "name":"jordanhuusy@yahoo.com",
                "id":"a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients",
                "picture":"https://s.gravatar.com/avatar/332713e1693261e97de7da89b49e46f1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png"
            },
            'board_id': test_board_id,
            'board_json': {
                '0': [1, 2, 3, 4, 5, 6, 7, 8, 9],
                '1': [1, 2, 3, 4, 5, 6, 7, 8, 9],
                '2': [5, None, 9, 2, 6, 7, None, 3, 4],
                '3': [1, None, 4, None, 3, 6, 7, 9, 8],
                '4': [6, 3, 7, 4, 9, 8, 5, 1, None],
                '5': [9, 5, 8, 7, 1, 2, 3, 4, 6],
                '6': [2, 6, 1, 8, 5, 4, None, None, 3],
                '7': [4, 7, 3, 9, None, 1, None, 6, 5],
                '8': [8, 9, None, None, 7, 3, 4, None, None]
            },
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().patch("/board-save", data=json.dumps(body), headers=headers)
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertGreater(len(data), 0)


    def test_board_save_401_missing_permission(self):
        """Ensure that 'save:sudoku' permission is required to get a user's
        boards. Use false token instead.
        """

        # TEST PREP: retrieve an existing board ID
        user_id = "a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        prep_response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        self.assertEqual(prep_response.status_code, 200)
        test_board_id = prep_response.json[0]["board_id"]

        # Main test
        body = {
            "user_info":{
                "name":"jordanhuusy@yahoo.com",
                "id":"a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients",
                "picture":"https://s.gravatar.com/avatar/332713e1693261e97de7da89b49e46f1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png"
            },
            'board_id': test_board_id,
            'board_json': {
                '0': [1, 2, 3, 4, 5, 6, 7, 8, 9],
                '1': [1, 2, 3, 4, 5, 6, 7, 8, 9],
                '2': [5, None, 9, 2, 6, 7, None, 3, 4],
                '3': [1, None, 4, None, 3, 6, 7, 9, 8],
                '4': [6, 3, 7, 4, 9, 8, 5, 1, None],
                '5': [9, 5, 8, 7, 1, 2, 3, 4, 6],
                '6': [2, 6, 1, 8, 5, 4, None, None, 3],
                '7': [4, 7, 3, 9, None, 1, None, 6, 5],
                '8': [8, 9, None, None, 7, 3, 4, None, None]
            },
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.false_token}"
        }
        response = self.client().patch("/board-save", data=json.dumps(body), headers=headers)
        self.assertEqual(response.status_code, 401)


    def test_board_delete_200(self):
        """Ensure /board-delete endpoint is working properly.
        """

        boards_count_before = 0

        # TEST PREP: retrieve an existing board ID
        user_id = "a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        prep_response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        self.assertEqual(prep_response.status_code, 200)
        test_board_id = prep_response.json[0]["board_id"]
        boards_count_before = len(prep_response.json)

        # Main test
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().delete(f"/board-delete/{test_board_id}", headers=headers)
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertGreater(boards_count_before, len(data))


    def test_board_delete_401_missing_permission(self):
        """Ensure that 'delete:sudoku' permission is required to delete a user's
        board.
        """

        # TEST PREP: retrieve an existing board ID
        user_id = "a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        prep_response = self.client().get(f"/board-get-user/{user_id}", headers=headers)
        self.assertEqual(prep_response.status_code, 200)
        test_board_id = prep_response.json[0]["board_id"]

        # Main test
        body = {
            "user_info":{
                "name":"jordanhuusy@yahoo.com",
                "id":"a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients",
                "picture":"https://s.gravatar.com/avatar/332713e1693261e97de7da89b49e46f1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png"
            }
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.false_token}"
        }
        response = self.client().delete(f"/board-delete/{test_board_id}", headers=headers)
        self.assertEqual(response.status_code, 401)


    def test_board_delete_400_board_not_found(self):
        """Ensure that boards that don't exist return 400 status code.
        """

        # Main test
        body = {
            "user_info":{
                "name":"jordanhuusy@yahoo.com",
                "id":"a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients",
                "picture":"https://s.gravatar.com/avatar/332713e1693261e97de7da89b49e46f1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png"
            }
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        test_board_id = 100000
        response = self.client().delete(f"/board-delete/{test_board_id}", headers=headers)
        self.assertEqual(response.status_code, 400)


    def test_board_of_the_day_save_200(self):
        """Ensure /board-of-the-day-save endpoint is working properly.
        """

        # TEST PREP: retrieve an existing board ID
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        prep_response = self.client().get("/board-of-the-day", headers=headers)
        self.assertEqual(prep_response.status_code, 200)
        board_of_the_day_id = prep_response.json["board_id"]

        # Main test
        body = {
            "user_info":{
                "name":"Jordan H",
                "id":"yTRW0CYiuMO1hjlvw06OhH7AxbWDnMKY@clients",
                "picture":"https://s.gravatar.com/avatar/332713e1693261e97de7da89b49e46f1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png"
            },
            'board_id': board_of_the_day_id,
            'board_json': {
                '0': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '1': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '2': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '3': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '4': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '5': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '6': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '7': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '8': [9, 9, 9, 9, 9, 9, 9, 9, 9]
            },
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.admin_jwt_token}"
        }
        response = self.client().patch("/board-of-the-day-save", data=json.dumps(body), headers=headers)
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data["saved_board_id"], board_of_the_day_id)


    def test_board_of_the_day_save_401_missing_permission(self):
        """Ensure /board-of-the-day-save endpoint requires the permission 'add:sudoku-of-the-day'.
        """

        # TEST PREP: retrieve an existing board ID
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        prep_response = self.client().get("/board-of-the-day", headers=headers)
        self.assertEqual(prep_response.status_code, 200)
        board_of_the_day_id = prep_response.json["board_id"]

        # Main test
        body = {
            "user_info":{
                "name":"jordanhuusy@yahoo.com",
                "id":"a5RyVox4oYemxRJHNvKslJ7uvLTigiQu@clients",
                "picture":"https://s.gravatar.com/avatar/332713e1693261e97de7da89b49e46f1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png"
            },
            'board_id': board_of_the_day_id,
            'board_json': {
                '0': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '1': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '2': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '3': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '4': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '5': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '6': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '7': [9, 9, 9, 9, 9, 9, 9, 9, 9],
                '8': [9, 9, 9, 9, 9, 9, 9, 9, 9]
            },
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"bearer {self.gamer_jwt_token}"
        }
        response = self.client().patch("/board-of-the-day-save", data=json.dumps(body), headers=headers)
        self.assertEqual(response.status_code, 401)


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
