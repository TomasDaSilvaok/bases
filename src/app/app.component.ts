import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Titulo de mi aplicacion';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(): void {
    if (this.counter <= 0) return;
    this.counter--;
  }

  reset(): void {
    this.counter = 10;
  }
}
