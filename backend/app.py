import os
from flask import Flask
from models import setup_db, Person, db
from flask_cors import CORS

def create_app(test_config=None):

    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    @app.route('/')
    def get_greeting():
        return "Not implemented"

    @app.route('/get_new_board')
    def be_cool():
        return "Not implemented"


app = create_app()

if __name__ == '__main__':
    app.run()
