import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    orig_board: number[][];
    new_board: number[][];
    row: number;
    cell_value_9_i: number;
    random: string;

    constructor(private _http: HttpService) {
      this.cell_value_9_i = 1;

      this.random = "hello";

      this.orig_board = this._http.getBoard();
      this.new_board = {...this.orig_board};
    }

    ngOnInit() {

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
      console.log("new: ");
      console.log(this.new_board);
      console.log("old: ");
      console.log(this.orig_board);
    }

    // Bind user input to each sudoku board cell
    onKey(event: any) {

      // Ensure input. Tabs can cause no input.
      if(event.target.value != "") {
        let cell_coordinates_string_raw: string = event.target.id;
        let cell_coordinates_string: string[] = cell_coordinates_string_raw.split("-");
        let cell_coordinates_number: number[] = this.convert_string_array_to_nums(cell_coordinates_string);
        let cell_value: number = parseInt(event.target.value);

        this.new_board[cell_coordinates_number[0]][cell_coordinates_number[1]] = cell_value;
      }
    }


    convert_string_array_to_nums(string_array: string[]) {
      var results: number[] = [];
      for (let i = 0; i < string_array.length; i++) {
        const element = string_array[i];
        results.push(parseInt(element));
      }

      return results;
    }


}
