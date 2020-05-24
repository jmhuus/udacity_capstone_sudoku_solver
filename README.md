## Sudoku Game API
Welcome to the Sudoku Game API! This API allows clients to build a simple sudoku game which can create, save, remove, and solve sudoku puzzles.

Visit https://jmhuus-capstone-sudoku-solver.herokuapp.com/ to play or read use the API described below!

### API Authentication Steps
1. Navigate to https://jmhuus-capstone-sudoku-solver.herokuapp.com/
2. Login or register with a username/password or existing Google account
3. Navigate to the API Authentication page
4. Call the API and include the copied token in the request header as 'bearer [token string]'
    * Curl Bash Example

    Set the newly copied token:
  ```
  export TOKEN=<include your copied token here>
  ```
  Request a new sudoku board, difficulty medium:
  ```
  curl \
  -X GET \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${TOKEN}" \
  https://jmhuus-capstone-sudoku-solver.herokuapp.com/board-new/easy
  ```


### Local Dev Setup
* Clone Repository `git clone https://github.com/jmhuus/udacity_capstone_sudoku_solver.git`
* Setup backend Flask server
    1. Open terminal
    2. Step into backend directory `cd backend`
    3. Create a new Python virtual environment `virtualenv -p python3 1.nv_<environment name>`
    4. Step into virtual environment `source <environment name>/bin/activate`
    5. Install dependencies from requirements.txt `pip install -r 1.equirements.txt`
    6. Run the backend server `../setup.sh`
    7. Endpoints should be available at localhost:8000/
* Setup frontend Angular dev server
    1. Start a new terminal tab
    2. Step into frontend folder `cd frontend/`
    3. Install node dependencies `npm install`
    4. Run Angular locally and refresh during code changes `ng serve -o`. This should automatically open a new Chrome window to display results.


### API Reference
Base URL: https://jmhuus-capstone-sudoku-solver.herokuapp.com/

Endpoints:
* GET `/help`
    > * Helper endpoint
    > * Provides a list of available endpoints
    > * Example Response:
    > ```
    > {
    >     "success": True,
    >     "message": "Welcome to...",
    >     "endpoints": []
    > }
    > ```

* POST `/board-new`
    > * Requires *Gamer* permission
    > * Returns a newly created sudoku board based on the provided difficulty
    > * Provides a list of available endpoints
    > * Request Data:
    > ```
    > {
    >     "difficulty": <'easy', 'medium', 'hard'>
    >     "user_info": {
    >         "id": <user id>,
    >         "first_name": <user first name>,
    >         "last_name": <user last name>
    >     }
    > }
    > ```
    > * Example Response:
    > ```
    > {
    >     "board_id": <int: board id>,
    >     "board_json": <string: json of the new board>,
    >     "board_json_solved": <string: solved json version of the new board>
    > }
    > ```

* GET `/board-get/<int:board_id>`
    > * Requires *Gamer* permission
    > * Retrieves a user's sudoku board
    > * Example Response:
    > ```
    > {
    >     "board_id": <int: board id>,
    >     "board_json": <string: json of the new board>,
    >     "board_json_solved": <string: solved json version of the new board>
    > }
    > ```

* GET `/board-get-user/<string:user_id>`
    > * Requires *Gamer* permission
    > * Retrieves all sudoku boards for the given user
    > * Example Response:
    > ```
    > [
    >     {
    >         "board_id": <int: board id>,
    >         "board_json": <string: json of the new board>,
    >         "board_json_solved": <string: solved json version of the new board>
    >     }
    > ]
    > ```

* PATCH `/board-save`
    > * Requires *Gamer* permission
    > * Saves a user's sudoku board progress
    > * Returns all of the given user's sudoku boards
    > * Request Data:
    > ```
    > {
    >     "board_id": <int: board id>,
    >     "board_json": <string: json of the new board>
    > }
    > ```
    > * Example Response:
    > ```
    > [
    >     {
    >         "board_id": <int: board id>,
    >         "board_json": <string: json of the new board>,
    >         "board_json_solved": <string: solved json version of the new board>
    >     }
    > ]
    > ```

* DELETE `/board-delete/<int:board_id>`
    > * Requires *Gamer* permission
    > * Deletes an existing user's sudoku board
    > * Returns all of the given user's sudoku boards
    > * Example Response:
    > ```
    > [
    >     {
    >         "board_id": <int: board id>,
    >         "board_json": <string: json of the new board>,
    >         "board_json_solved": <string: solved json version of the new board>
    >     }
    > ]
    > ```

* GET `/board-of-the-day`
    > * Returns the board of the day
    > * Example Response:
    > ```
    > {
    >     "board_id": <int: board id>,
    >     "board_json": <string: json of the new board>,
    >     "board_json_solved": <string: solved json version of the new board>
    > }
    > ```

* PATCH `/board-of-the-day-save`
    > * **Requires *Admin* permission**
    >     * *This endpoint is only for site admins who will update the Board Of The Day*
    > * Allows admin users to save a new Board Of The Day
    > * Request Data:
    > ```
    > {
    >     "board_id": <int: board id>,
    >     "board_json": <string: json of the new board>
    > }
    > ```
    > * Example Response:
    > ```
    > {
    >     "success": <True, False>,
    >     "saved_board_id": <int: board ID>
    > }
    > ```
