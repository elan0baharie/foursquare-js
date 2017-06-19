import { Component } from '@angular/core';
import { FoursquareService } from './foursquare.service';
import { Test } from './test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoursquareService]
})
export class AppComponent {
  results;
  placeList: Test []= [];

  onClick() {
    var test = this.callApi();

  }

  callApi() {
    this.foursquareService.getVenue().subscribe(data => {this.results = data.response.groups[0].items;
    console.log(this.results.length);

    })
  }
  constructor(private foursquareService: FoursquareService) {


  }



    }
