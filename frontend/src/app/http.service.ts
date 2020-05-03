import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from './board/board';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly solve_url: string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {

  }

  // Post request to solve the sudoku puzzle
  solveBoard(board: Object): Observable<Object> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {
      "board": board
    }
    return this.http.post(this.solve_url+"/solve-board", JSON.stringify(body), httpOptions);
  }

  // Post request to solve the sudoku puzzle
  getNewBoard(difficulty: string): Observable<Object> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {
      "difficulty": difficulty
    }
    return this.http.post(this.solve_url+"/board-new", JSON.stringify(body), httpOptions);
  }

  // Save the current boards progress
  saveBoard(board: Board): Observable<Object> {
    console.log(board.format());

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {
      "board_id": board.id,
      "board_json": board.board
    }
    return this.http.put(this.solve_url+"/board-save", JSON.stringify(body), httpOptions);
  }

  // Get an existing board's data
  getBoard(board_id: number) {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {
      "board_id": board_id
    }
    return this.http.post(this.solve_url+"/board-get", JSON.stringify(body), httpOptions);
  }
}
