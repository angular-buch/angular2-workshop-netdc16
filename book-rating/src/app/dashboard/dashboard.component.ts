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
    return this.books.length;
  }

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('111', 'Angular', 'Eine praktische Einführung', 5),
      new Book('222', 'AngularJS', 'Goldy but Oldie', 3)
    ];
    this.books.sort();
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
