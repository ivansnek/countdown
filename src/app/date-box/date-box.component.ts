import { Component, OnInit, Input } from '@angular/core';
import { CounterType } from '../shared/types/counter-type';

@Component({
  selector: 'app-date-box',
  templateUrl: './date-box.component.html',
  styleUrls: ['./date-box.component.css']
})
export class DateBoxComponent implements OnInit {
  @Input() date: any;
  @Input() type: CounterType;
  constructor() { }

  ngOnInit() {
  }

}
