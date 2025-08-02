import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public charachters: Character[] = [
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 8000 },
    { id: uuid(), name: 'Krillin', power: 1000 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };

    this.charachters.push(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    this.charachters.splice(index, 1);
  }

  deleteCharacterById(id: string): void {
    debugger;
    this.charachters = this.charachters.filter(
      (character) => character.id !== id
    );
  }
}
