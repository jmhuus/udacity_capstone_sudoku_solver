import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { Board } from '../board/board';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-board-of-the-day',
  templateUrl: './board-of-the-day.component.html',
  styleUrls: ['./board-of-the-day.component.scss']
})
export class BoardOfTheDayComponent implements OnInit {
  board_of_the_day: Board;
  user_message: string;
  readonly board_size = [1,2,3,4,5,6,7,8,9];
  user_boards: Board[];
  isAdmin: boolean;

  constructor(private _http: HttpService, public auth: AuthService) {
    // if (this.auth.getPayload())
    this.isAdmin = false;
  }

  ngOnInit(): void {
    // Initialize empty board
    this.board_of_the_day = Board.getBlankBoard();
    this.user_message = "";

    // Display the board of the day
    this.displayBoardOfTheDay();


  }

  // Set shading
  setClass(column, row) {
    let myClasses = {
      grey_cell: (2 < row && row <= 5) || (2 < column && column <= 5),
      white_cell: (2 < row && row <= 5) && (2 < column && column <= 5)
    }
    return myClasses;
  }

  // Fetch the board of the day
  displayBoardOfTheDay(): void {
    let response: Observable<Object> = this._http.getBoardOfTheDay(this.auth.getToken());
    response.subscribe(
      value => {

        // Ensure board of the day is available
        if (value == null) {
          this.user_message = "Board of the day unavailable.";
        }

        // Set board object
        this.board_of_the_day = JSON.parse(JSON.stringify(new Board(
          value["board_id"],
          value["board_json"],
          value["board_json_solved"],
          value["board_json"])));
      },
      error => console.log("error: "+error),
      () => console.log("complete")
    );
  }

  // Reset the board to the original
  resetBoard(): void {
    this.board_of_the_day.board = JSON.parse(JSON.stringify(this.board_of_the_day.board_original));
  }

  // Administrator's ability to change the board of the day
  saveBoard(): void {
    console.log("not implemented");
  }

  // Sanitize board data; ensure that all input is the same format
  sanitizeBoardData(): Board {
    let newBoard: Board = JSON.parse(JSON.stringify(this.board_of_the_day));
    for (let row = 0; row < Object.keys(newBoard.board).length; row++) {
      for (let column = 0; column < newBoard.board[row].length; column++) {
        const element = newBoard.board[row][column];
        if(typeof element == "string"){
          newBoard.board[row][column] = parseInt(element);
        } else {
          newBoard.board[row][column] = element;
        }
      }
    }

    return newBoard;
  }

  // // Check if the board has been solved
  // @HostListener('window:keyup', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   this.sanitizeBoardData();
  //   if (
  //     JSON.parse(JSON.stringify(this.board_of_the_day.board)) ==
  //     JSON.parse(JSON.stringify(this.board_of_the_day.board_solved))) {
  //     this.user_message = "Solved! Congratulations";
  //   } else {
  //     this.user_message = "Not solved yet...";
  //   }
  // }


  changed(event): void {
    let sanitizeBoard = this.sanitizeBoardData();
    if (
      JSON.stringify(sanitizeBoard.board) ==
      JSON.stringify(sanitizeBoard.board_solved)) {
      this.user_message = "Solved! Congratulations";
    } else {
      this.user_message = "Not solved yet...";
    }
  }
}
