import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>App counter: {{ counter }}</h2>

    <button (click)="increaseBy(1)">+</button>
    <button (click)="reset()">reset</button>
    <button (click)="decreaseBy()">-</button>`,
  standalone: false,
})
export class CounterComponent {
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
