import { Component, Input } from '@angular/core';
import { Book } from './../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  // [Property-Binding]
  @Input() book: Book;
}
