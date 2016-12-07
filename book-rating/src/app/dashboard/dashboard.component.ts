import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  get count() {
    console.log('ZUGRIFF');
    return this.books.length;
  }

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('111', 'Angular', 'Eine praktische Einführung', 5),
      new Book('222', 'AngularJS', 'Goldy but Oldie', 3)
    ];
  }
}
