import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  numberToBinary(number) {
    return (number >>> 0).toString(2);
  }

  secondToMin(seconds) {
    let second = seconds % 60;
    let minute = Math.trunc(seconds / 60);
    return minute + ':' + second;
  }

  pastSecondToDate(seconds) {
    var date = new Date();
    date.setTime(seconds * 1000);
    return date.toLocaleString('TR-tr');
  }
}
