import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

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

  solveBoard(board: Object) {
    var solve_url: string = "http://127.0.0.1:8000";
    var test_url: string = "https://jsonplaceholder.typicode.com/posts";

    return this.http.get(test_url);
  }
}
