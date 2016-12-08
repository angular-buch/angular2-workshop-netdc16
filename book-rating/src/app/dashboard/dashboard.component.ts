import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from './../shared/book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];
  url = 'https://book-monkey2-api.angular-buch.com/books';

  constructor(private http: Http) { }

  get count() {
    console.log('Change Detection!');
    return this.books.length;
  }

  ngOnInit() {

    this.http.get(this.url)
        .map(response => response.json())
        .map(json => json
          .map(r => new Book(r.isbn, r.title, r.description, r.rating)))
        .subscribe(books => {
          this.books = books;
        });

    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
