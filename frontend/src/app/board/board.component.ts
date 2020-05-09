import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { Board } from './board';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
    board: Board;
    user_message: string;
    readonly board_size = [1,2,3,4,5,6,7,8,9];
    user_boards: Board[];

    constructor(private _http: HttpService, public auth: AuthService) { }

    ngOnInit() {
      // Initialize empty board
      this.board = Board.getBlankBoard();
      this.user_message = "";

      // If the user is logged in and user_boards is empty, attempt loading
      // the user's boards.
      if (this.auth.getUserInfo() != null && this.user_boards == null) {
        this.displayUserBoards();
      }
    }

    // Set shading
    setClass(column, row) {
      let myClasses = {
        grey_cell: (2 < row && row <= 5) || (2 < column && column <= 5),
        white_cell: (2 < row && row <= 5) && (2 < column && column <= 5)
      }
      return myClasses;
    }


    // Solve the sudoku puzzle
    solveRandomBoard() {
      this.user_message = "not implemented";
    }

    solveBoard() {
      // this.board.board = JSON.parse(JSON.stringify(this.board.board_solved));
      console.log(this.board);

    }

    // Retrieve a new board for the user to solve
    newBoard() {
      // TODO(jordanhuus): remove hard code
      let response: Observable<Object> = this._http.getNewBoard(
          "easy", this.auth.getUserInfo(), this.auth.getToken());
      response.subscribe(
        value => {
          this.board = new Board(
            value["board_id"],
            value["board_json"],
            value["board_json_solved"],
            value["board_json"]);

          // Display all user boards
          this.displayUserBoards();
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }

    // Display the original version after initially created
    resetBoard() {
      this.board.board = JSON.parse(
        JSON.stringify(this.board.board_original));
    }

    // Save this.board's progress
    saveBoard() {
      this.sanitizeBoardData();
      let userInfo = this.auth.getUserInfo();
      if (userInfo == null) {
        this.user_message = "Problem with login. Please log out and back in.";
        return;
      }
      let response: Observable<Object> = this._http.saveBoard(this.board, userInfo, this.auth.getToken());
      response.subscribe(
        value => {
          this.user_message = "Saved!";

          // Display list of user boards
          this.user_boards = [];
          for (let i = 0; i < Object.keys(value).length; i++) {
            const element = value[i];
            let newBoard: Board = new Board(
              element["board_id"],
              element["board_json"],
              element["board_json_solved"],
              element["board_json"]
            );
            this.user_boards.push(newBoard);
          }
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }

    // Sanitize board data; ensure that all input is the same format
    sanitizeBoardData(): void {
      for (let row = 0; row < Object.keys(this.board.board).length; row++) {
        for (let column = 0; column < this.board.board[row].length; column++) {
          const element = this.board.board[row][column];
          if(typeof element == "string"){
            this.board.board[row][column] = parseInt(element);
          } else {
            this.board.board[row][column] = element;
          }
        }
      }
    }

    // Get a specific board from the server
    getBoard(i: number): void {
      this.board = JSON.parse(JSON.stringify(new Board(
        this.user_boards[i].id,
        this.user_boards[i].board,
        this.user_boards[i].board_solved,
        this.user_boards[i].board)));
    }

    // Display all of the user's saved boards
    displayUserBoards(): void {
      let response: Observable<Object> = this._http.getUserBoards(this.auth.getUserInfo(), this.auth.getToken());
      response.subscribe(
        value => {
          // User has no saved boards
          if (value == null || value == "") { return }

          // Retrieve user's baord data
          this.board = JSON.parse(JSON.stringify(new Board(
            value[0]["board_id"],
            value[0]["board_json"],
            value[0]["board_json_solved"],
            value[0]["board_json"])));

          // Display list of user boards
          this.user_boards = [];
          for (let i = 0; i < Object.keys(value).length; i++) {
            const element = value[i];
            let newBoard: Board = new Board(
              element["board_id"],
              element["board_json"],
              element["board_json_solved"],
              element["board_json"]
            );
            this.user_boards.push(newBoard);
          }
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }

    deleteBoard(i: number): void {

      // DELETE request
      let response: Observable<Object> = this._http.deleteBoard(this.board, this.auth.getToken());
      response.subscribe(
        value => {
          this.user_message = "Saved!";
          console.log("response from delete request");
          console.log(value);
          // // Display list of user boards
          // this.user_boards = [];
          // for (let i = 0; i < Object.keys(value).length; i++) {
          //   const element = value[i];
          //   let newBoard: Board = new Board(
          //     element["board_id"],
          //     element["board_json"],
          //     element["board_json_solved"],
          //     element["board_json"]
          //   );
          //   this.user_boards.push(newBoard);
          // }
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }
}
