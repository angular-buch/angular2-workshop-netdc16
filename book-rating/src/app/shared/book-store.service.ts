import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Book } from '../shared/book';

@Injectable()
export class BookStoreService {

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get('https://book-monkey2-api.angular-buch.com/books')
      .retry(5)
      .map((response: Response) => response.json())
      .map(booksRaw => <Book[]>booksRaw
        .map(b => new Book(b.isbn, b.title, b.description, b.rating)));
  }
}
