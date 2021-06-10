import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityDetailsComponent } from './city-details/city-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cityDetail/:name', component: CityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes, {useHash: true});

