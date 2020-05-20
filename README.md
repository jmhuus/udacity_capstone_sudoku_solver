#### Sudoku Game API
Welcome to the Sudoku Game API! This API allows clients to build a simple sudoku game which can create, save, remove, and solve sudoku puzzles.

##### API Reference

Endpoints:



* GET `/`
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
    > * Requires *Admin* permission
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
