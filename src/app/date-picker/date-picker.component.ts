import { Component } from '@angular/core';
import { CountdownService } from '../shared/services/countdown.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  date: Date;
  constructor(private countService: CountdownService) {}

  onDateChanged() {
    this.countService.setDate(this.date);
  }

}
