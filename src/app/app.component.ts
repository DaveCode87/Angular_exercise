import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Contatore';

  counter: number = 0;

  add(): void {
    this.counter++;
  }

  remove(): void {
    this.counter--;
  }
}
