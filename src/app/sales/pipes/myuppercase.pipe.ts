import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase',
})
export class MyUppercasePipe implements PipeTransform {
  transform(value: string, onUpperCase: boolean = true): string {
    return onUpperCase ? value.toUpperCase() : value.toLowerCase();
  }
}
