import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Breweries in San Diego';
  
  year = (new Date()).getFullYear();

  arr = [1, 2, 3, 4];
  

}
