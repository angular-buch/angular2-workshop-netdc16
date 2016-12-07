import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { BookStoreService } from './../shared/book-store.service';

import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  get count() {
    return this.books.length;
  }

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => {
        this.books = books;
        this.books.sort();
      });
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
