import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private id: string;
  private password: string;

  constructor() {
    this.id = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

}
