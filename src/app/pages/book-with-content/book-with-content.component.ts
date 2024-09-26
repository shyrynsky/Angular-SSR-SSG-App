import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
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
export class BookWithContentComponent implements OnInit {
  textsService = inject(TextsService)
  booksService = inject(BooksService)
  text?: Text;
  book?: Book;
  route = inject(ActivatedRoute);

  constructor() {

  }

  ngOnInit() {
    const bookId = parseInt(this.route.snapshot.params['id'], 10);

    this.booksService.getBookById(bookId).subscribe((book?: Book) =>{
      this.book = book;
      if (this.book != null && this.book != undefined) {
        this.textsService.getTextById(this.book.text_id).subscribe((text?: Text) =>{
          this.text = text;
        });
      }
    });
  }
}
