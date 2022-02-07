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

  get units() {
    return this.weatherService.units;
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
        this.weatherService.locationForDays = [];

        for (let i = 0; i < 6; i++) {
          this.weatherService.locationForDays.push(days.list[i]);
        }

        console.log(this.weatherService.locationForDays);
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
        .subscribe( days => {
          this.weatherService.locationForDays = [];

          for (let i = 0; i < 6; i++) {
            this.weatherService.locationForDays.push(days.list[i]);
          }

          console.log(this.weatherService.locationForDays);
        });
    });

  }

  mostrarSnackBar( mensaje: string ) {

    this.snackBar.open( mensaje, 'Cerrar', {
       duration: 2500
    })

  }

}
