import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    board: number[][];
    row: number;
    cell_value_9_i: number;
    random: string;

    constructor(private _http: HttpService) {
      this.cell_value_9_i = 1;

      this.random = "hello";
    }

    ngOnInit() {
      this.board = this._http.getBoard();
    }

    // Set shading
    setClass(column, row=0) {
      let myClasses = {
        grey_cell: (2 < row && row <= 5) || (2 < column && column <= 5),
        white_cell: (2 < row && row <= 5) && (2 < column && column <= 5)
      }
      return myClasses;
    }


    // Solve the sudoku puzzle
    solveBoard() {
      console.log(this.board);

    }

    // Bind user input to each sudoku board cell
    onKey(event: any) {
      console.log(event);
      console.log(event.target.value+" for id "+event.target.id);


      // this.board += event.target.value;
    }


}
