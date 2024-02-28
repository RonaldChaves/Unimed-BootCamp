import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: any;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBook().subscribe((data => {
      this.books = data;
      console.log(this.books);
    }))
  }

}
