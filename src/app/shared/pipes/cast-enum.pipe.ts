import { Pipe, PipeTransform } from '@angular/core';
import { PortalTypeEnum } from '../models/checkout';
import { OrderStatusEnum } from '../models/order';

@Pipe({
  name: 'castEnum',
  standalone : true
})
export class CastEnumPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let result;
    if (args[0] === 'PortalType') {
      result = PortalTypeEnum;
    }
    if (args[0] === 'OrderStatus') {
      result = OrderStatusEnum;
    }

    if (result) {
      for (let index = 0; index < Object.keys(result).length; index++) {
        const element = result[index];
        if (value === index) {
          return element;
        }
      }
    }
    return value;
  }
}
