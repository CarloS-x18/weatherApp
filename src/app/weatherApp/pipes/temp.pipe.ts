import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform( value: number, unit: string ) {

    if( value && !isNaN(value) ) {

      if( unit === 'standard' ) {
        return ( (value * 1.8) + 32 );
      }
      if ( unit === 'metric' ) {
        return value;
      }

    }

    return;
  }

}
