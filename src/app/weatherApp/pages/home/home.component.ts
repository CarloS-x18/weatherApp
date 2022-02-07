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

    this.weatherService.getWeatherLocation( 'New York' )
      .subscribe( resp => {
        this.weatherService.location = resp;

        console.log( this.weatherService.location );
      });

  }

}
