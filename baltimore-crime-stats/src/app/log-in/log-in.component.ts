import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  hide = true;
  private username: string;
  private password: string;

  constructor() {
    this.username = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

}
