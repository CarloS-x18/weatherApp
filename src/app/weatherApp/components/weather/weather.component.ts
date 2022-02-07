import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  get days() {
    return this.weatherService.locationForDays;
  }

  get locationWeather() {
    return this.weatherService.location;
  }

  constructor( private weatherService: WeatherService ) { }

  ngOnInit(): void {
  }

}
