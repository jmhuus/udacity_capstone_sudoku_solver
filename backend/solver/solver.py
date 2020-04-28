import pprint

def print_board(grid):
    for row in range(9):
        print(grid[row])


class Solver():


    def __init__(self, grid, board_size):
        self.grid = grid
        self.MIN = 1
        self.MAX = board_size


    def __repr__(self):
        pprint.PrettyPrinter(self.grid)


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
                if self.grid[row][column] == None:
                    for i in range(1, 10):
                        if self.is_solution(i, [row, column]):
                            return self.grid


    def is_solution(self, attempt_number, coordinates):

        # Place attempt_number
        self.grid[coordinates[0]][coordinates[1]] = attempt_number

        # Validate board
        if not self.validate_board():
            self.grid[coordinates[0]][coordinates[1]] = None
            return False

        # Find next cell coordinates
        next_coordinate = self.get_next_available_address(coordinates[0], coordinates[1])
        if next_coordinate is None: # The board is full of solved cells
            return True

        # Test next solution
        for i in range(1, 10):
            if self.is_solution(i, next_coordinate):
                return True

        # All solutions attempted, none of them work
        self.grid[coordinates[0]][coordinates[1]] = None
        return False


    def get_next_available_address(self, row, col):
        while True:
            # End of the board?
            if row==8 and col==8:
                return None

            # End of the row
            if col==8:
                row += 1
                col = 0
            else:
                col += 1

            # Next available address found, return result
            if self.grid[row][col] == None:
                print(f"next available address is row={row} column={col}")
                return [row, col]


    def validate_board(self):
        # Validate each row
        for row in range(9):

            # Row values
            row_list = list(filter(lambda a: a != None, self.grid[row]))

            # Test for unique
            if len(row_list) != len(set(row_list)):
                return False

        # Validate each column
        for column in range(9):

            # Column values
            column_list = []
            for row in range(9):
                if self.grid[row][column] != None:
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
                for column in range(starting_cell_column, starting_cell_column + 3):
                    for row in range(starting_cell_row, starting_cell_row + 3):

                        # Check for grid duplicates
                        if self.grid[row][column] != None:
                            grid_list.append(self.grid[row][column])

                print(grid_list)
                if len(grid_list) != len(set(grid_list)):
                    return False
        return True
