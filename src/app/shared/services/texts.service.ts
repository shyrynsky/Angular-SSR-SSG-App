import { Text } from './../../Models/text';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  url = 'http://localhost:3000/texts';

  async getTextById(id: number): Promise<Text | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

}
