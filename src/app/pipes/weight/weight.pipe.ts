import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    const kg = value / 10;
    return `${kg} kg `;
  }
}
