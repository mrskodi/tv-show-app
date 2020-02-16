import { Component, OnInit } from '@angular/core';
import { ItvProgramDetails } from '../itv-program-details';
import { GetApiDataService } from '../get-api-data.service';
// import { GetApiDataService } from './get-api-data-service';

@Component({
  selector: 'app-tv-program-details',
  templateUrl: './tv-program-details.component.html',
  styleUrls: ['./tv-program-details.component.css']
})
export class TvProgramDetailsComponent implements OnInit {
  program: ItvProgramDetails

  constructor(private get_api_data: GetApiDataService) { }

  ngOnInit(): void {
    this.get_api_data.getProgramDetails('girls').subscribe(data => {
      console.log(data);
      this.program = data
      console.log(this.program);
    });
    
    console.log(this.program);
  }
}
