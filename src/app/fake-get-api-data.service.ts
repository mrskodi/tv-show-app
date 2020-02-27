import { Injectable } from '@angular/core';
import { IGetdataService } from './igetdata-service';
import { Observable, of } from 'rxjs';
import { IarrayTvprogramDetails } from './iarray-tvprogram-details';

@Injectable({
  providedIn: 'root'
})
export class FakeGetApiDataService implements IGetdataService {

  private fakePrograms: [{
    programId:30702,
    programUrl: 'http://www.tvmaze.com/shows/30702/gentleman-jack',
	  programName: 'Gentleman Jack',
	  programLanguage: 'English',
	  telecastTime: 2200,
	  telecastDays: ['Monday'],
    //networkName: 'HBO', 
    //webChannelName: '',
    telecastedOn: 'HBO',
	  programImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/191/478580.jpg',
	  programSummary: "<p><b>Gentleman Jack</b> is a remarkable and unlikely love story set in the complex, changing world of 1832 Halifax - the cradle of the industrial revolution - just as it's all kicking off. The drama will explore Anne Lister's relationships at home with her family, her servants, her tenants and her industrial rivals, who will use any dirty tricks they can to bring her down. At its heart is her relationship with her would-be wife, the wealthy heiress Ann Walker. It has all the warmth, wit, humour and complexity that audiences have come to associate with Sally Wainwright's writing.</p>"

  }]

    constructor() { }

    public getProgramListDetails(searchText: string): Observable<IarrayTvprogramDetails>{
      return of(this.fakePrograms);
    }
}
