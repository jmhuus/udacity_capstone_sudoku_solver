import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBoard() {
    // Original example from tut
    // http

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
}
