import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


const JWTS_LOCAL_KEY = 'JWTS_LOCAL_KEY';
const JWTS_ACTIVE_INDEX_KEY = 'JWTS_ACTIVE_INDEX_KEY';

@Component({
  selector: 'app-login-result',
  templateUrl: './login-result.component.html',
  styleUrls: ['./login-result.component.scss']
})
export class LoginResultComponent implements OnInit {

  token: string;
  payload: any;

  constructor() { }

  ngOnInit(): void {
    console.log("login-result.component.ts.ngOnInit was called!!!!");
    this.check_token_fragment()
    console.log(this.token);
  }

  // invoked in app.component on load
  check_token_fragment() {
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

  set_jwt() {
    localStorage.setItem(JWTS_LOCAL_KEY, this.token);
    if (this.token) {
      this.decodeJWT(this.token);
    }
  }

  decodeJWT(token: string) {
    const jwtservice = new JwtHelperService();
    this.payload = jwtservice.decodeToken(token);
    return this.payload;
  }

}
