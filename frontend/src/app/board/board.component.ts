import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    original_board: Object;
    board: Object;
    readonly board_size = [1,2,3,4,5,6,7,8,9];

    constructor(private _http: HttpService) {
      this.board = this._http.getBoard();
    }

    ngOnInit() {

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
    solveBoard() {
      let response: Observable<Object> = this._http.solveBoard(this.original_board);
      response.subscribe(
        value => {
          console.log(value);
          this.displayBoardData(value, true);
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }

    // Display the solution
    displayBoardData(response: any, show_solved: boolean) {
      if(show_solved){
        this.board = JSON.parse(JSON.stringify(response["solved_board"]));
      } else {
        this.board = JSON.parse(JSON.stringify(response["board"]));
      }
    }

    // Retrieve a new board for the user to solve
    newBoard() {
      let response: Observable<Object> = this._http.getNewBoard();
      response.subscribe(
        value => {
          this.original_board = value["board"];
          this.displayBoardData(value, false);
        },
        error => console.log("error: "+error),
        () => console.log("complete")
      );
    }

    saveBoard() {
      console.log("not implemented");
    }

    // Sanitize board data; ensure that all input is the same format
    sanitizeBoard() {
      for (let row = 0; row < Object.keys(this.board).length; row++) {
        for (let column = 0; column < this.board[row].length; column++) {
          const element = this.board[row][column];
          if(typeof element == "string"){
            this.board[row][column] = parseInt(element);
          }
        }
      }
    }
}
