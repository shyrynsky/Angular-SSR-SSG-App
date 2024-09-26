import { Author } from './../../Models/author';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { AuthorsService } from '../../shared/services/authors.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit{
  authorService = inject(AuthorsService)
  author?: Author;
  route = inject(ActivatedRoute);

  constructor() {

  }

  ngOnInit() {
    const authorId = parseInt(this.route.snapshot.params['id'], 10);

    this.authorService.getAuthorById(authorId).subscribe((author?: Author) =>{
      this.author = author;
      }
    );
  }
}
