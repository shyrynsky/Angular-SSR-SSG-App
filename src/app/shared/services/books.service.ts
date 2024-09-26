import { inject, Injectable } from '@angular/core';
import { Book } from '../../Models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url = `${environment.apiUrl}/books`;

  http = inject(HttpClient);

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }
  getBookById(id: number): Observable<Book | undefined> {
    return this.http.get<Book | undefined>(`${this.url}/${id}`);
  }

}
