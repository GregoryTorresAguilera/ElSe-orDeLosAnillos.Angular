import { CharactersService } from './services/characters.service';
import { CharacterInterface } from './models/Character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: CharacterInterface[] = [];
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data: any) => {
      const apiResults: CharacterInterface[] = data;

      const formattedCharacters = apiResults.map(({ id, name, origin, role, image, family }) => ({
        id, name, origin, role, image, family
      }));
      this.characters = formattedCharacters
    })
  }

}
