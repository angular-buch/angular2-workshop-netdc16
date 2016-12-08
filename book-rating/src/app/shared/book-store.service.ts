import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './../shared/book';

@Injectable()
export class BookStoreService {

  url = 'https://book-monkey2-api.angular-buch.com/books';

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {

    return this.http.get(this.url)
      .map(response => response.json())
      .map(json => json
        .map(r => new Book(
          r.isbn,
          r.title,
          r.description,
          r.rating)));
  }
}
