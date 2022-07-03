import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Brewery } from './brewery';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class BreweryService {
  
  private breweryUrl = 'https://api.openbrewerydb.org/breweries';  // URL to web api
    
    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }       

          getBreweries()  {           

              return this.http.get(this.breweryUrl + "?by_city=san_diego") 
                .pipe(
                  map((res: any) => 
                  res.map((data: any) =>
                  {
                    return {
                      id : data.id,
                      name : data.name,
                      type : data.brewery_type,
                      state : data.state,
                      postalCode : data.postal_code,
                      street : data.street,
                      city : data.city,
                      phone : data.phone,
                      websiteUrl : data.website_url
                    }
                  })/*.catch((error: Response) => {
                      let message = 'error caught in service';
                      console.log()                   
                      return throwError(message); 
          
                  })*/)
                )  
              }

            getBreweryById(id: any)  {            
              
             return this.http.get(this.breweryUrl + "/" + id)
                .pipe(
                  map((res: any) => 
                  {
                    return {
                      id : res.id,
                      name : res.name,
                      state : res.state,
                      postalCode : res.postal_code,
                      type : res.brewery_type,
                      street : res.street,
                      city : res.city,
                      lng : res.longitude,
                      lat : res.latitude,
                      phone : res.phone,
                      websiteUrl : res.website_url
                     
                    }
                  }
                  ) 
                )  
            }      


    }


function throwError(err: any) {
  throw new Error(err);
}
  