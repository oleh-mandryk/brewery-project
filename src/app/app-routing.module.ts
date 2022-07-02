import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreweriesComponent } from './breweries/breweries.component';
import { BrewerydetailComponent } from './brewerydetail/brewerydetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/breweries', pathMatch: 'full' },
  
  { path: 'breweries', component: BreweriesComponent },
  { path: 'brewery/:id', component: BrewerydetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
