import { Component, OnInit } from '@angular/core';


import { HttpService } from '../http.service';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    orig_board: Object;
    new_board: Object;
    readonly board_size = Array(9).fill().map((x,i)=>i);

    test_response: Observable;

    constructor(private _http: HttpService) {
      this.orig_board = this._http.getBoard();
      this.new_board = JSON.parse(JSON.stringify(this.orig_board)); // clone without object reference
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
      this.test_response = this._http.solveBoard(this.new_board);
      this.test_response.subscribe(
        value => {
          this.showMeMyData(value);
        },
        error => console.log("error: "+error),
        _ => console.log("complete")
      );
    }


    showMeMyData(data){
      console.log(data["success"]);
      console.log(data["message"]);
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
