import { Component } from '@angular/core';
import { GetApiDataService } from './get-api-data.service';
import { IarrayTvprogramDetails } from './iarray-tvprogram-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayProgramDetails: IarrayTvprogramDetails
  title = 'tv-show-app';
  constructor(private tvProgramService: GetApiDataService){}

  doSearch(searchValue){
    const userInput = searchValue.trim();
    this.tvProgramService.getProgramListDetails(userInput).
    subscribe(data => this.displayProgramDetails = data);
  }
}
