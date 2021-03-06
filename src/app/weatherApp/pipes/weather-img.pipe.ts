import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImg'
})
export class WeatherImgPipe implements PipeTransform {

  transform( icon: string ): string {
    return `https://openweathermap.org/img/wn/${ icon }@2x.png`;
  }

}
