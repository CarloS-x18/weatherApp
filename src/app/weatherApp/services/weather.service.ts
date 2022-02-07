import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LocationWeather } from '../interfaces/location.interfaces';
;

import { List, LocationDays } from '../interfaces/location-days.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private api: string = 'd478f7cbec80ed627e3337be5d8c0e46';
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5';

  location!: LocationWeather;
  locationForDays: List[] = [];

  units: string = 'metric';

  constructor( private http: HttpClient ) { }

  getWeatherLocation( location: string ): Observable<LocationWeather> {
    const url = `${ this.baseUrl }/weather?q=${ location }&units=metric&appid=${ this.api }`;
    return this.http.get<LocationWeather>( url );
  }

  getWeatherCurrentLocation( lat: number, lon: number ): Observable<LocationWeather> {
    const url = `${ this.baseUrl }/weather?lat=${ lat }&lon=${ lon }&units=metric&appid=${ this.api }`;
    return this.http.get<LocationWeather>( url );
  }

  getDaysWeather( location: string ): Observable<LocationDays>{
    const url = `${ this.baseUrl }/forecast?q=${ location }&units=metric&appid=${ this.api }`;
    return this.http.get<LocationDays>( url );
  }

  getDaysWeatherCurrentLocation( lat: number, lon: number ): Observable<LocationDays>{
    const url = `${ this.baseUrl }/forecast?lat=${ lat }&lon=${ lon }&units=metric&appid=${ this.api }`;
    return this.http.get<LocationDays>( url );
  }

}
