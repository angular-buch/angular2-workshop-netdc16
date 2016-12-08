import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  // [Property-Binding]
  @Input() book: Book;

  // (Event-Binding)
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
