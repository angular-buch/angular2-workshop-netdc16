import { Component, OnInit } from '@angular/core';

import { Book } from './../shared/book';
import { BookStoreService } from './../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bs: BookStoreService) { }

  get count() {
    console.log('Change Detection!');
    return this.books.length;
  }

  ngOnInit() {
    this.bs.getAll()
       .subscribe(books => {
          this.books = books;
          this.reorderBooks();
        });
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
