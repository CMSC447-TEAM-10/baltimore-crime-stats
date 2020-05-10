import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-implement',
  templateUrl: './logout-implement.component.html',
  styleUrls: ['./logout-implement.component.css']
})
export class LogoutImplementComponent implements OnInit {
  @Output() onUserLogout = new EventEmitter<boolean>();

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.emailLogout();
    this.onUserLogout.emit(true);
    this.router.navigate(['login-visualization/login']);
  }
}
