import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private weatherService: WeatherService ) { }

  ngOnInit(): void {

    this.weatherService.getWeatherLocation( 'Tokyo' )
      .subscribe( resp => {
          this.weatherService.location = resp;
          console.log(resp);
        });

    this.weatherService.getDaysWeather( 'Tokyo' )
      .subscribe( days => {
        for (let i = 0; i < 6; i++) {
          this.weatherService.locationForDays.push(days.list[i]);
        }

        console.log(this.weatherService.locationForDays);
      });

  }

}
