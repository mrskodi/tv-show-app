import { Component, OnInit, Input } from '@angular/core';

import { GetApiDataService } from '../get-api-data.service';
import { IarrayTvprogramDetails } from '../iarray-tvprogram-details';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tv-program-details',
  templateUrl: './tv-program-details.component.html',
  styleUrls: ['./tv-program-details.component.css']
})
export class TvProgramDetailsComponent implements OnInit {

  //programList: IarrayTvprogramDetails;
  @Input() programList: IarrayTvprogramDetails;
  //listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['programName', 'programLanguage', 'programImage', 'telecastedOn', 'telecastDays', 'telecastTime', 'programUrl'];

  constructor(private get_api_data: GetApiDataService) { }

  ngOnInit(): void {
    //this.listData = new MatTableDataSource(this.programList);
  }
}
