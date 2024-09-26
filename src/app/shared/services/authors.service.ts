import { Injectable } from '@angular/core';
import { Author } from '../../Models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  url = 'http://localhost:3000/authors';

  async getAuthorById(id: number): Promise<Author | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

}
