import { Component, OnInit } from '@angular/core';

import { ItvProgramDetails } from '../itv-program-details';
import { GetApiDataService } from '../get-api-data.service';
import { IarrayTvprogramDetails } from '../iarray-tvprogram-details';


@Component({
  selector: 'app-tv-program-details',
  templateUrl: './tv-program-details.component.html',
  styleUrls: ['./tv-program-details.component.css']
})
export class TvProgramDetailsComponent implements OnInit {
//  program: ItvProgramDetails;
  programList: IarrayTvprogramDetails;
  displayedColumns: string[];
  
  constructor(private get_api_data: GetApiDataService) { }

  ngOnInit(): void {
    // Call getProgramListDetails (pass the name of program).
    // Get the data back and subscribe for any changes.
    //this.displayedColumns = ['programName', 'programLanguage', 'programImage', 'programSummary'];
    this.get_api_data.getProgramListDetails("sex and the city").subscribe(data => 
      {
      this.programList = data;
      //console.log(this.programList);
    });
  }
}
