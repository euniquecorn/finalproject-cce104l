import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('dateFormat-value: ', value);
    console.log('dateFormat-args: ', args);
    return null;
  }

}
