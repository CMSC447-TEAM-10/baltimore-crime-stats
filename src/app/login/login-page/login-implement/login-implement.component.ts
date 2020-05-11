import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-implement',
  templateUrl: './login-implement.component.html',
  styleUrls: ['./login-implement.component.css']
})
export class LoginImplementComponent implements OnInit {
  @Output() onUserLogin = new EventEmitter<boolean>();
 
  constructor(public auth: AuthService, public router: Router) {  
  }

  ngOnInit(): void { }

  login(email: string, password: string) {
    const result = this.auth.emailLogin(email, password);
    this.onUserLogin.emit(true);
    this.router.navigate(['login-visualization/logout']);
  }
}
