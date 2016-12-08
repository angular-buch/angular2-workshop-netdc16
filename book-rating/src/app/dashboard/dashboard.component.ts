import { Component, OnInit } from '@angular/core';
import { Book } from './../shared/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  get count() {
    console.log('Change Detection!');
    return this.books.length;
  }

  ngOnInit() {

    // Ziel: sortiere mich!!
    this.books = [
      new Book('111', 'Angular 2', 'Tolles Buch', 5),
      new Book('222', 'AngularJS', 'Oldie but goldie', 3)
    ];

    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
