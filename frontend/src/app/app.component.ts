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

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.check_token_fragment();
    this.user_name = this.auth.payload["http://www.jordanhuus.com/user_name"];
  }
}
