import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-api-token',
  templateUrl: './api-token.component.html',
  styleUrls: ['./api-token.component.scss']
})
export class ApiTokenComponent implements OnInit {
  jwt_token: string;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.jwt_token = this.auth.getToken();
  }

}
