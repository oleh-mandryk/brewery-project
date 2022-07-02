import { Component, OnInit } from '@angular/core';

import { Brewery } from '../brewery';
import { BreweryService } from '../brewery.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.sass']
})

export class BreweriesComponent implements OnInit {

  brewery: Brewery[] = [];

  constructor(private breweryService: BreweryService) { }

  ngOnInit(): void {
    this.getBreweries();    
    
  }

  getBreweries(): void {
    this.breweryService.getBreweries()
    .subscribe(breweries => this.brewery = breweries);
  }

}
