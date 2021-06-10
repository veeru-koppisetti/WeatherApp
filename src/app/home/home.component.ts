import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locationsList:any=[];
  public cityData:any=[];
  public moment: any = moment;

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.locationsList=['London','Paris','Vienna','Budapest','Berlin'];
    this.locationsList.forEach((o:any) => {
      this.loadCityData(o)
    })
  }

  //getting city data
  loadCityData(city:any){
    this.homeService.loadCityData(city).subscribe((data:any) => {      
      this.cityData.push(data);
  })
 }

}