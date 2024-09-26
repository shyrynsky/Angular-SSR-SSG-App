import { inject, Injectable } from '@angular/core';
import { Author } from '../../Models/author';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  url = `${environment.apiUrl}/authors`;

  http = inject(HttpClient);

  getAuthorById(id: number): Observable<Author | undefined> {
    return this.http.get<Author | undefined>(`${this.url}/${id}`);
  }

}
