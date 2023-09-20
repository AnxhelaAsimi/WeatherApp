import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherInfo} from '../models/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {


  }

  getWeatherData(city: string) : Observable<WeatherInfo>{
    return this.http.get<WeatherInfo>(environment.weatherAPIBaseUrl + '/current.json', {
      headers: new HttpHeaders()
      .set(environment.headerHostName, environment.headerHostValue)
      .set(environment.headerKeyName, environment.headerHostValue),

      params: new HttpParams()
      .set('q', city)
     
    });
  }
}
