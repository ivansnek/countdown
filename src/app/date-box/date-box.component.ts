import { Component, OnInit, Input } from '@angular/core';
import { CounterType } from '../shared/types/counter-type';
import { CountdownService } from '../shared/services/countdown.service';
import * as moment from 'moment-mini';
@Component({
  selector: 'app-date-box',
  templateUrl: './date-box.component.html',
  styleUrls: ['./date-box.component.css']
})
export class DateBoxComponent implements OnInit {
  @Input() type: CounterType;
  typeDescription: string;
  remainingDate: any;
  constructor(private countdownService: CountdownService) {
    this.countdownService.getObservable().subscribe(remainingTime => {
      this.setRemainingDate(remainingTime);
    });
  }

  ngOnInit() {
    this.setTypeDescription();
  }

  setTypeDescription() {
    switch (this.type) {
      case CounterType.Day:
        this.typeDescription = 'Days';
        break;
      case CounterType.Hour:
        this.typeDescription = 'Hours';
        break;
      case CounterType.Minute:
        this.typeDescription = 'Minutes';
        break;
      case CounterType.Second:
        this.typeDescription = 'Seconds';
        break;
    }
  }

  setRemainingDate(remainingTime: any) {
    const duration = moment.duration(remainingTime - 1000, 'milliseconds');
    switch (this.type) {
      case CounterType.Day:
        this.remainingDate = duration.days();
        break;
      case CounterType.Hour:
        this.remainingDate = duration.hours();
        break;
      case CounterType.Minute:
        this.remainingDate = duration.minutes();
        break;
      case CounterType.Second:
        this.remainingDate = duration.seconds();
        break;
    }
  }

}
