import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  currentUser: boolean;

  constructor(public auth: AuthService, public router: Router) {
    this.currentUser = false;
    console.log("Construtor: " + this.currentUser);
  }

  ngOnInit(): void {
  }

  userUpdate(result: boolean) {
    this.currentUser = result;
    console.log("Update: " + this.currentUser);
  }
}
