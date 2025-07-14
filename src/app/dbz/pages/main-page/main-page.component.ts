import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public charachters: Character[] = [
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 8000 },
    { name: 'Krillin', power: 1000 },
  ];
}
