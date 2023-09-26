import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'shamsi',
  standalone : true
})
export class ShamsiPipe implements PipeTransform {
  transform(value: any, args?: string): any {
    const mom = moment(value);
    if (value) {
      if (!args) args = 'date';
      if (args === 'date') return mom.locale('fa').format('YYYY/MM/DD');
      if (args === 'dateTime') return mom.locale('fa').format('YYYY/MM/DD HH:mm:ss');
    }
    return value;
  }
}
