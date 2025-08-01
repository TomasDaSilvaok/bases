import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public charachters: Character[] = [
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 8000 },
    { name: 'Krillin', power: 1000 },
  ];

  onNewCharacter(character: Character): void {
    this.charachters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.charachters.splice(index, 1);
  }
}
