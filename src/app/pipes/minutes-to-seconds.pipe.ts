import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToSeconds'
})
export class MinutesToSecondsPipe implements PipeTransform {

  transform(people: number, ...args: unknown[]): unknown {

    return people * 60;
  }
}