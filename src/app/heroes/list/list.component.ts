import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroList: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  deleteLastHero(): void {
    this.deletedHero = this.heroList.pop();
  }
}
