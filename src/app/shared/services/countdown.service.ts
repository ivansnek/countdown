import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment-mini';

@Injectable()
export class CountdownService {
  private subjectDate: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private intervalId: any;
  constructor() {}

  setDate(date: Date) {
    if (this.intervalId) { clearInterval(this.intervalId); }
    this.intervalId = setInterval(() => {
      const dateDiff = moment(date).diff(moment());
      this.subjectDate.next(dateDiff);
    }, 1000);
  }

  getObservable(): Observable<Date> {
    return this.subjectDate.asObservable();
  }

}
