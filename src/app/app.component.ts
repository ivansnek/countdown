import { Component } from '@angular/core';
import { CounterType } from './shared/types/counter-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date;
  constructor() {
    this.date = new Date();
  }
}
