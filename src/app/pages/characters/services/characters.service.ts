import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public charactersURL: string = "http://localhost:3000/characters";


  constructor(private httpClient: HttpClient) { }

  public getAllCharacters() {
    return this.httpClient.get(this.charactersURL)
  }

  public getCharacter(idCharacter: any) {
    return this.httpClient.get(`${this.charactersURL}/${idCharacter}`)
  }
}
