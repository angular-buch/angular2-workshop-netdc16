import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from './../shared/book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  @Input() hidden: boolean;
  @Output() created = new EventEmitter<Book>();

  book = Book.empty();

  constructor() { }

  ngOnInit() {
  }

  addBook() {
    this.created.emit(this.book);
    this.book = Book.empty();
  }
}
