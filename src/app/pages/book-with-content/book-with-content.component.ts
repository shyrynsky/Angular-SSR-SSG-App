import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TextsService } from './../../shared/services/texts.service';
import { Text } from '../../Models/text';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-book-with-content',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './book-with-content.component.html',
  styleUrl: './book-with-content.component.css'
})
export class BookWithContentComponent {
  textsService = inject(TextsService)
  bookService = inject(BooksService)
  text?: Text;
  book?: Book;
  route = inject(ActivatedRoute);

  constructor() {
    const bookId = parseInt(this.route.snapshot.params['id'], 10);

    this.bookService.getBookById(bookId).then((book) =>{
      this.book = book;
      if (this.book != null && this.book != undefined) {
          this.textsService.getTextById(this.book.text_id).then((text) =>{
            this.text = text;
          });
        }
    });
  }
}
