import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  value: string = '';
  today: Date = new Date();

  get location() {
    return this.weatherService.location;
  }

  get LocationDays() {
    return this.weatherService.locationForDays
  }

  constructor( private weatherService: WeatherService,
               private snackBar: MatSnackBar ) { }

  search() {

    if( this.value === '' ) {
      this.mostrarSnackBar('You havent written anything.');
      return;
    }

    this.weatherService.getWeatherLocation( this.value )
      .subscribe( {
        next: resp => {
          this.weatherService.location = resp;
          console.log(resp);
        },
        error: err => {
          this.mostrarSnackBar('This location does not exist, try another one.');
        }
      });

    this.weatherService.getDaysWeather( this.value )
      .subscribe( days => {
        this.weatherService.locationForDays = days;
        console.log(days);
      });

    this.value = '';

  }

  searchCurrentLocation() {
    navigator.geolocation.getCurrentPosition( position => {

      const { coords: { latitude, longitude } } = position;

      this.weatherService.getWeatherCurrentLocation( latitude, longitude )
        .subscribe( resp => {
          this.weatherService.location = resp;
          console.log(resp);
        });

      this.weatherService.getDaysWeatherCurrentLocation( latitude, longitude )
        .subscribe( resp => {
          this.weatherService.locationForDays = resp;
          console.log(resp)
        });
    });

  }

  mostrarSnackBar( mensaje: string ) {

    this.snackBar.open( mensaje, 'Cerrar', {
       duration: 2500
    })

  }

}
