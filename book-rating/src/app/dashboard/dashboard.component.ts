import { Component, OnInit } from '@angular/core';
import { Book } from './../shared/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('111', 'Angular 2', 'Tolles Buch', 5),
      new Book('222', 'AngularJS', 'Oldie but goldie', 3)
    ];
  }
}
