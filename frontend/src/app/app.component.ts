import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Sudoku Solver Capstone';
  user_info: Object;
  loginUrl: string = '';

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.check_token_fragment();
    this.user_info = this.auth.getUserInfo();
    this.loginUrl = this.auth.getLoginUrl();
    console.log(this.loginUrl);

  }

  logout(): void {
    this.auth.logout();
    this.user_info = null;
  }
}
