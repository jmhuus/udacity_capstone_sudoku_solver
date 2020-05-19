import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../board/board';




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
  getNewBoard(difficulty: string, userInfo: Object, token: string): Observable<Object> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    let body = {
      "difficulty": difficulty,
      "user_info": userInfo
    }
    return this.http.post(this.solve_url+"/board-new", JSON.stringify(body), httpOptions);
  }

  // Save the current boards progress
  saveBoard(board: Board, userInfo: Object, token: string): Observable<Object> {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    let body = {
      "board_id": board.id,
      "board_json": board.board,
      "user_info":  userInfo
    }
    return this.http.patch(this.solve_url+"/board-save", JSON.stringify(body), httpOptions);
  }

  // Save the current boards progress
  saveBoardOfTheDay(board: Board, userInfo: Object, token: string): Observable<Object> {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    let body = {
      "board_id": board.id,
      "board_json": board.board,
      "user_info":  userInfo
    }
    return this.http.patch(this.solve_url+"/board-of-the-day-save", JSON.stringify(body), httpOptions);
  }

  getUserBoards(userInfo: Object, token: string): Observable<Object> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.get(this.solve_url+"/board-get-user/"+userInfo["id"], httpOptions);
  }


  deleteBoard(board: Board, token: string): Observable<Object> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.delete(this.solve_url+"/board-delete/"+board.id, httpOptions);
  }

  getBoardOfTheDay(token: string): Observable<Object> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.get(this.solve_url+"/board-of-the-day", httpOptions);
  }
}
