import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  //API call for city data
  loadCityData(city:any){
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3d8b309701a13f65b660fa2c64cdc517'
    );
  }

    //API call for getting weather info
  weatherData(city:any){
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=3d8b309701a13f65b660fa2c64cdc517'
    );
  }
}
