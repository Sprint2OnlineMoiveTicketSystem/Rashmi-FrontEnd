import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { AllTheaterComponent } from './all-theater/all-theater.component';
import { UpdateTheaterComponent } from './update-theater/update-theater.component';
import { GetTheaterComponent } from './get-theater/get-theater.component';
import { AddTheaterByCityIdComponent } from './add-theater-by-city-id/add-theater-by-city-id.component';
import { SearchTheaterByCityIdComponent } from './search-theater-by-city-id/search-theater-by-city-id.component';


const routes: Routes = [
  {path: "", component:AddTheaterByCityIdComponent},
  {path: "theater/add", component:AddTheaterComponent},
  {path: "theater/show", component: AllTheaterComponent},
  {path: "theater/update/:id", component:UpdateTheaterComponent},
  {path:"theater/get/:id", component:GetTheaterComponent},
  {path:"theater/addbyCity/:id", component:AddTheaterByCityIdComponent},
  {path: "theater/searchTheater/:id",component:SearchTheaterByCityIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
