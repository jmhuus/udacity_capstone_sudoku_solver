import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly solve_url: string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {

  }

  // TODO(jordanhuus): implement API and request
  getBoard() {
    return {
      0: ["","","","","","","","",""],
      1: ["","","","","","","","",""],
      2: ["","","","","","","","",""],
      3: ["","","","","","","","",""],
      4: ["","","","","","","","",""],
      5: ["","","","","","","","",""],
      6: ["","","","","","","","",""],
      7: ["","","","","","","","",""],
      8: ["","","","","","","","",""],
    }
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
  getNewBoard(): Observable<Object> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {
      "difficulty": "easy"
    }
    return this.http.post(this.solve_url+"/board-new", JSON.stringify(body), httpOptions);
  }
}
