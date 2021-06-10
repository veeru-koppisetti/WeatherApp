import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {HomeService} from '../home.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  city:any;
  temp:any;
  sea_level:any;
  weatherDetails:any=[];
  date:any;

  constructor(private route: ActivatedRoute,public homeService: HomeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.city = params['name'];
      this.weatherData(this.city);
    });
  }

  //getting weather info
  weatherData(city:any){
    this.homeService.weatherData(city).subscribe((data:any) => {      
      data.list.forEach((o:any) => {
        if(o.dt_txt.toString().split(" ")[1]=='09:00:00'){
          this.date=o.dt_txt;
          this.temp=o.main.temp;
          this.sea_level=o.main.sea_level;
          this.weatherDetails.push({'date':this.date,'temp':o.main.temp,'sea_level':o.main.sea_level});
        }
      })
  })
 }

}
