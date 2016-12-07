import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books = ['Angular 2  - Einstieg', 'Stars Wars Rouge One'];

  constructor() { }

  ngOnInit() {
  }

}
