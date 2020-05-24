import pprint
import math
import random
import json
from copy import deepcopy


class Solver():
    def __init__(self, grid, board_size):
        self.grid = self.convert_from_json(grid)
        self.MIN = 1
        self.MAX = board_size

    def __repr__(self):
        pprint.PrettyPrinter(self.grid)

    def convert_from_json(self, grid_json):
        """Returns a converted JSON formatted sudoku board into a two-
        dimensional python list.

        Args:
            grid_json: JSON formatted sudoku board.

        Returns:
            Two-dimensional python list sudoku board representation.
        """

        try:
            converted_board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
            for row_index, row_values in grid_json.items():
                row = []
                for row_value in row_values:
                    if row_value != "":
                        row.append(int(row_value))
                    else:
                        row.append(None)
                converted_board[int(row_index)] = row

        except AttributeError:  # Board format already 2D list
            converted_board = grid_json

        return converted_board

    def solve(self):
        """
        Begins the solving recursion process.

        Finds the first unsolved cell and begins solving he puzzle
        using DFS.

        Returns:
        list: Two dimensional list; represents the solved sudoku board
        """
        for row in range(9):
            for column in range(9):
                if self.grid[row][column] is None:
                    for i in range(1, 10):
                        if self.is_solution(i, [row, column]):
                            return self.grid

    def is_solution(self, attempt_number, coordinates):
        """This is the main recursive function, calling itself on line 92. Adds
        a number to the board and checks if it violates the basic rules of
        Sudoku.

        Args:
            attempt_number: Integer between 1 and 9 the next attempted number
            in the given coordinate parameter.
            coordinates: List containing the row and column of the current cell
            in question.

        Returns:
            True or False based on the returned recursive function calls AND
            the validate_board() function.
        """

        # Place attempt_number
        self.grid[coordinates[0]][coordinates[1]] = attempt_number

        # Validate board
        if not self.validate_board():
            self.grid[coordinates[0]][coordinates[1]] = None
            return False

        # Find next cell coordinates
        next_coordinate = self.get_next_available_address(coordinates[0],
                                                          coordinates[1])
        if next_coordinate is None:  # The board is full of solved cells
            return True

        # Test next solution
        for i in range(1, 10):
            if self.is_solution(i, next_coordinate):
                return True

        # All solutions attempted, none of them work
        self.grid[coordinates[0]][coordinates[1]] = None
        return False

    def get_next_available_address(self, row, col):
        """Retrieves the next empty sudoku puzzle cell coordinate.

        Args:
            row: Integer of the current cell coordinate row.
            col: Integer of the current cell coordinate column.

        Returns:
            List containing the [row, colum] of the next empty sudoku cell
            coordinate.
        """

        while True:
            # End of the board?
            if row == 8 and col == 8:
                return None

            # End of the row
            if col == 8:
                row += 1
                col = 0
            else:
                col += 1

            # Next available address found, return result
            if self.grid[row][col] is None:
                return [row, col]

    def validate_board(self):
        # Validate each row
        for row in range(9):

            # Row values
            row_list = list(filter(lambda a: a is not None, self.grid[row]))

            # Test for unique
            if len(row_list) != len(set(row_list)):
                return False

        # Validate each column
        for column in range(9):

            # Column values
            column_list = []
            for row in range(9):
                if self.grid[row][column] is not None:
                    column_list.append(self.grid[row][column])

            # Test for unique
            if len(column_list) != len(set(column_list)):
                return False

        # Validate Grids
        # Retrieve grid coordinates
        for starting_cell_column in range(0, 9, 3):
            for starting_cell_row in range(0, 9, 3):
                grid_list = []

                # Loop through the grid, using the provided grid coordinates
                for column in range(starting_cell_column, starting_cell_column
                                    + 3):
                    for row in range(starting_cell_row, starting_cell_row + 3):

                        # Check for grid duplicates
                        if self.grid[row][column] is not None:
                            grid_list.append(self.grid[row][column])

                if len(grid_list) != len(set(grid_list)):
                    return False
        return True


def generate_new_board(difficulty):
    """
    Generates a new sudoku board based on difficulty.
        1). Randomly place numbers on the board
        2). Solve the board - this is the new board
        3). Remove numbers based on chosen difficulty
        4). Return both versions of the sudoku board

    Args:
        difficulty: string 'easy', 'medium', or 'hard'.

    Returns:
        Dictionary of the "solved_board" and "board". Each board representation
        is in JSON format.
    """
    new_board_data = {
        "solved_board": None,
        "board": None
    }

    board = [
        [None, None, None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None, None]
    ]

    # Generate random numbers on the board to create a unique result
    board[0][0] = math.floor((random.random() * 9)+1)
    board[4][1] = math.floor((random.random() * 9)+1)
    board[8][2] = math.floor((random.random() * 9)+1)

    # Solve the board
    solver = Solver(board, 9)
    board = solver.solve()
    new_board_data["solved_board"] = jsonify_board(deepcopy(board))

    # Determine board density based on difficulty
    if difficulty == "hard":
        numbers_left = 35
    elif difficulty == "medium":
        numbers_left = 45
    else:  # easy
        numbers_left = 60
    numbers_left = 81 - numbers_left

    # Remove numbers from the board
    for i in range(numbers_left):
        # Remove snake-based location starting from the top left
        snake_location = 0
        snake_locations_removed = []

        # Remove random cells based on snake-based location
        cell_to_remove = math.floor((random.random() * 81)+1)
        for row_index in range(len(board)):
            for column_index in range(len(board[row_index])):
                if cell_to_remove == snake_location:
                    board[row_index][column_index] = None
                    snake_locations_removed.append(cell_to_remove)
                snake_location += 1

    new_board_data["board"] = jsonify_board(board)
    return new_board_data


def jsonify_board(board_list):
    """
    Converts a python 2D list into a python dictionary that can easily be
    converted to JSON.

    Args:
        board_list: 2 dimensional python list; represents sudoku board.

    Returns:
        JSON string representation of a Sudoku board.
    """

    board = {}
    for i in range(len(board_list)):
        board[str(i)] = board_list[i]
    return json.dumps(board)
