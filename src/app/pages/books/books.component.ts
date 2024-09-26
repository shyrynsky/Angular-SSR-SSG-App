import { Component, inject } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../Models/book';
import { BookItemComponent } from "../../shared/components/book-item/book-item.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookItemComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  booksService = inject(BooksService)
  booksList: Book[] = [];

  constructor() {
    this.booksService.getAllBooks().then((bookList: Book[]) =>{
      this.booksList = bookList;
    });
  }
}
