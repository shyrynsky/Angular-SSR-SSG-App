import { Component, Input } from '@angular/core';
import { Book } from '../../../Models/book';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() book!: Book;
}
