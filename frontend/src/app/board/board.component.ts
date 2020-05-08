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

    board_displayed: Object;
    board: Board;
    user_message: string;
    readonly board_size = [1,2,3,4,5,6,7,8,9];
    user_boards: Object;

    constructor(private _http: HttpService, public auth: AuthService) {
      this.board_displayed = Board.getBlankBoard();
      this.user_message = "";
    }

    ngOnInit() {

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

      // let response: Observable<Object> = this._http.solveBoard(this.original_board);
      // response.subscribe(
      //   value => {
      //     this.board_displayed = this.board.board;
      //   },
      //   error => console.log("error: "+error),
      //   () => console.log("complete")
      // );
    }

    solveBoard() {
      this.board_displayed = JSON.parse(
        JSON.stringify(this.board.board_solved));
    }

    // Retrieve a new board for the user to solve
    newBoard() {
      let response: Observable<Object> = this._http.getNewBoard(
          "easy", this.auth.getUserInfo()); // TODO(jordanhuus): remove hard code
      response.subscribe(
        value => {
          this.board = new Board(
            value["board_id"],
            value["board_json"],
            value["board_json_solved"],
            value["board_json"]);
          this.board_displayed = JSON.parse(JSON.stringify(this.board.board));
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }

    // Display the original version after initially created
    resetBoard() {
      this.board_displayed = JSON.parse(
        JSON.stringify(this.board.board_original));
    }

    // Save this.board's progress
    saveBoard() {
      this.board.board = this.sanitizeBoardData(this.board_displayed);
      let response: Observable<Object> = this._http.saveBoard(this.board, this.auth.getUserInfo());
      response.subscribe(
        value => {
          this.user_message = "Saved!";
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }

    // Sanitize board data; ensure that all input is the same format
    sanitizeBoardData(boardData: Object) {
      let sanitizedBoardData: Object = Board.getBlankBoard();

      for (let row = 0; row < Object.keys(boardData).length; row++) {
        for (let column = 0; column < boardData[row].length; column++) {
          const element = boardData[row][column];
          if(typeof element == "string"){
            sanitizedBoardData[row][column] = parseInt(element);
          } else {
            sanitizedBoardData[row][column] = element;
          }
        }
      }

      return sanitizedBoardData
    }

    // // Get a specific board from the server
    // getBoard(): void {
    //   let response: Observable<Object> = this._http.getBoard(9);
    //   response.subscribe(
    //     value => {
    //       console.log(value);
    //
    //       this.board = new Board(
    //         value["board_id"],
    //         value["board_json"],
    //         value["board_json_solved"],
    //         value["board_json"]);
    //       this.board_displayed = JSON.parse(JSON.stringify(this.board.board));
    //     },
    //     error => console.log("error: "+error),
    //     () => console.log("complete")
    //   );
    // }

    // Display all of the user's saved boards
    displayUserBoards(): void {
      let response: Observable<Object> = this._http.getUserBoards(this.auth.getUserInfo());
      response.subscribe(
        value => {
          // User has no saved boards
          if (value == null || value == "") { return }

          // Retrieve user's baord data
          this.user_boards = value;
          this.board = new Board(
            value[0]["board_id"],
            value[0]["board_json"],
            value[0]["board_json_solved"],
            value[0]["board_json"]);
          this.board_displayed = JSON.parse(JSON.stringify(this.board.board));
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }
}
