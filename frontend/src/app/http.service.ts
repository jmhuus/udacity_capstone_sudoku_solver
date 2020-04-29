import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  // TODO(jordanhuus): implement API and request
  getBoard() {
    return {
      0: [0,0,0,0,0,0,0,0,0],
      1: [0,0,0,0,0,0,0,0,0],
      2: [0,0,0,0,0,0,0,0,0],
      3: [0,0,0,0,0,0,0,0,0],
      4: [0,0,0,0,0,0,0,0,0],
      5: [0,0,0,0,0,0,0,0,0],
      6: [0,0,0,0,0,0,0,0,0],
      7: [0,0,0,0,0,0,0,0,0],
      8: [0,0,0,0,0,0,0,0,0],
    }
  }

  // Post request to solve the sudoku puzzle
  solveBoard(board: Object) {
    console.log("from http.service.ts");

    console.log(board);

    // var solve_url: string = "http://127.0.0.1:8000/solve-board";
    //
    // let httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    //
    // let body = {
    //     "message": "not implemented",
    //     "success": true
    // }
    //
    // console.log(JSON.stringify(board));
    //
    //
    // return this.http.post(solve_url, JSON.stringify(board), httpOptions);
  }
}
