import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from './../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent {

  // [property-binding]
  @Input() book: Book;

  // (event-bindings)
  @Output() rated = new EventEmitter<Book>();

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }
}
