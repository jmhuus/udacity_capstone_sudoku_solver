import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login-result',
  templateUrl: './login-result.component.html',
  styleUrls: ['./login-result.component.scss']
})
export class LoginResultComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.check_token_fragment();
  }
}
