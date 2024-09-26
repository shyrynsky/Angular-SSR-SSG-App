import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Text } from './../../Models/text';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  url = `${environment.apiUrl}/texts`;

  http = inject(HttpClient);

  getTextById(id: number): Observable<Text | undefined> {
    return this.http.get<Text | undefined>(`${this.url}/${id}`);
  }
}
