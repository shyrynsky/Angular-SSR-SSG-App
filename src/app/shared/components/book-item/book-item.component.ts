import { Component, Input } from '@angular/core';
import { Book } from '../../../Models/book';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() book!: Book;
}
