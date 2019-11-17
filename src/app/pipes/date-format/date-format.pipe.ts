import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === undefined || value === null) {
      return null;
    }

    return super.transform(Date.parse(value), 'yyyy.MM.dd h:mm:ss');
  }
}
