import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const JWTS_LOCAL_KEY = 'JWTS_LOCAL_KEY';
const JWTS_ACTIVE_INDEX_KEY = 'JWTS_ACTIVE_INDEX_KEY';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  payload: any;


  constructor() { }

  // invoked in app.component on load
  check_token_fragment(): void {
    // parse the fragment
    const fragment = window.location.hash.substr(1).split('&')[0].split('=');
    // check if the fragment includes the access token
    if ( fragment[0] === 'access_token' ) {
      // add the access token to the jwt
      this.token = fragment[1];
      // save jwts to localstore
      this.set_jwt();
    }
  }

  set_jwt(): void {
    localStorage.setItem(JWTS_LOCAL_KEY, this.token);
    if (this.token) {
      this.decodeJWT(this.token);
    }
  }

  decodeJWT(token: string): void {
    const jwtservice = new JwtHelperService();
    this.payload = jwtservice.decodeToken(token);
    return this.payload;
  }

  getPayload(): any {
    return this.payload;
  }

  getToken(): string {
    return this.token;
  }

  logout(): void {
    this.token = '';
    this.payload = null;
    this.set_jwt();
  }

  getLoginUrl(): string {
    let link = 'https://';
    link += 'jordan-flask-authentication-practice.auth0.com';
    link += '/authorize?';
    link += 'audience=' + 'sudoku-api' + '&';
    link += 'response_type=token&';
    link += 'client_id=' + 'hTHs2lbL26VDIPLLzFffuWhsoJItrYDG' + '&';
    link += 'redirect_uri=' + 'http://localhost:4200/';
    return link;
  }

  getUserInfo(): Object {
    if (this.payload != null) {
      return this.payload["http://www.jordanhuus.com/user_info"];
    } else {
      return null;
    }
  }
}
