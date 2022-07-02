import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, RouterEvent,  Router, Event } from '@angular/router';
import { filter } from 'rxjs';

import { Brewery } from '../brewery';
import { BreweryService } from '../brewery.service';


@Component({
  selector: 'app-brewerydetail',
  templateUrl: './brewerydetail.component.html',
  styleUrls: ['./brewerydetail.component.sass']
})
export class BrewerydetailComponent implements OnInit {

  brewery: Brewery | any;
  breweries: Brewery[] = [];

  lat : number = 0  ;
  lng : number = 0 ;

  zoom : number = 7;
 
  id: string | undefined; 

  constructor(private breweryService: BreweryService, private route:ActivatedRoute, private router: Router) {
    
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });    

    this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      
      this.getBreweryById();  
   });
    
  }

  ngOnInit(): void {  
    
    this.getBreweryById();
    this.getBreweries();  

 }  

  getBreweryById(): void {     
    
    this.breweryService.getBreweryById(this.id)
      .subscribe(breweries => {
          this.brewery = breweries,
          this.lat = +breweries.lat,
          this.lng = +breweries.lng
        });    
  }  

  getBreweries(): void {    
    
    this.breweryService.getBreweries()
    .subscribe(breweries => this.breweries = breweries);
  }
}