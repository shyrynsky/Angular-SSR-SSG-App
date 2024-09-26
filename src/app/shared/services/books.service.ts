import { Injectable } from '@angular/core';
import { Book } from '../../Models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url = 'http://localhost:3000/books';



  async getAllBooks(): Promise<Book[]> {
    const data = await fetch(this.url);
    return (await data.json() as Book[]) ?? [];
  }
  async getBookById(id: number): Promise<Book | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

}
