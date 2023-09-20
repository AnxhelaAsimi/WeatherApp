import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  isDay = true;
  city = 'Paris';

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.city)
    .subscribe({
      next: (response) =>{
        console.log(response);
      } 
    });
  }
}
