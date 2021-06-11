import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const meters = value / 10;
    return `${meters} m `;
  }

}
