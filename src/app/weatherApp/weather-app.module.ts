import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherImgPipe } from './pipes/weather-img.pipe';
import { TempPipe } from './pipes/temp.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    WeatherComponent,
    WeatherImgPipe,
    TempPipe
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class WeatherAppModule { }
