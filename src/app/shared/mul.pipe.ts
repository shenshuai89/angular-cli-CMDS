import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mul'
})
export class MulPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (!args){
      args=1;
    }
    return value*args;
  }

}
