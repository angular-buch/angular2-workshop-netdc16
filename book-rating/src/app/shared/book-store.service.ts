import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Book } from '../shared/book';

@Injectable()
export class BookStoreService {

  constructor(private http: Http, @Inject('STORE_URL') private url: string) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(`${this.url}/books`)
      .retry(5)
      .map((response: Response) => response.json())
      .map(booksRaw => <Book[]>booksRaw
        .map(b => new Book(b.isbn, b.title, b.description, b.rating)));
  }
}
