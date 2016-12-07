import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BookComponent } from '../book/book.component';
import 'rxjs/add/operator/filter';

import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  books: Book[];

  @ViewChild(BookComponent) bc: BookComponent;

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

  ngAfterViewInit() {
    this.bc.rated
      .filter((book: Book) => book.isbn === '111')
      .subscribe((book) => {
        console.log(book);
      });
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
