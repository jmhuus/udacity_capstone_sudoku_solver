import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  loginUrl: string;


  constructor(private _http: HttpService) {
    this.loginUrl = this.getLoginUrl();
  }

  ngOnInit(): void {
  }


  getLoginUrl() {
    let link = 'https://';
    link += 'jordan-flask-authentication-practice.auth0.com';
    link += '/authorize?';
    link += 'audience=' + 'sudoku-api' + '&';
    link += 'response_type=token&';
    link += 'client_id=' + 'hTHs2lbL26VDIPLLzFffuWhsoJItrYDG' + '&';
    link += 'redirect_uri=' + 'http://localhost:4200/login-result';
    return link;
  }
}
