import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Sudoku Solver Capstone';
  user_name: string = '';
  loginUrl: string = '';

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.check_token_fragment();
    this.user_name = this.auth.getUserName();
    this.loginUrl = this.auth.getLoginUrl();
    console.log(this.loginUrl);

  }

  logout(): void {
    this.auth.logout();
    this.user_name = '';
  }
}
