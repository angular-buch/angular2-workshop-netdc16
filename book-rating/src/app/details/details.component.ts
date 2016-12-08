import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      this.isbn = params['isbn']);
   }

  ngOnInit() {
  }

}
