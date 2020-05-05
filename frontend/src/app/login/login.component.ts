import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _http: HttpService) { }

  ngOnInit(): void {}
}
