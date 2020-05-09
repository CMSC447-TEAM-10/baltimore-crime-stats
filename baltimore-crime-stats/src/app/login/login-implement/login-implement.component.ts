import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-implement',
  templateUrl: './login-implement.component.html',
  styleUrls: ['./login-implement.component.css']
})
export class LoginImplementComponent implements OnInit {
  status$: Observable<boolean>;
  currentStatus = 'Sign in';

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    //this.status$ = this.afAuth.authState.map(user => !!user);
    //this.status$.subscribe(auth => this.currentStatus = auth ? 'Sign out' : 'Sign in');
  }

  loginStatus() {
    //this.status$.take(1).subscribe(s => s ? this.afAuth.auth.signOut() : 
      //this.afAuth.auth.signInWith)
  }
}
