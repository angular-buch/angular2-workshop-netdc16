export class Book {

  static empty() { return new Book('XXX-XXX-XXX', '', ''); }

  constructor(public isbn: string,
              public title: string,
              public description: string,
              public rating = 0) {  }

  rateUp() {
    if (this.rating + 1 > 5) {
      return;
    }

    this.rating++;
  }

  rateDown() {
    if (this.rating - 1 < 0) {
      return;
    }

    this.rating--;
  }
}

