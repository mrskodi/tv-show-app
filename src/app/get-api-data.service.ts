import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IapiData } from './iapi-data';
import { ItvProgramDetails } from './itv-program-details';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {

  constructor(private httpClient: HttpClient) { }
  getProgramDetails(name: string):Observable<ItvProgramDetails> {
    console.log("In getProgram Details function");
    
    var apiData: Observable<IapiData>;
    apiData = this.httpClient.get<IapiData>(`${environment.baseURL}api.tvmaze.com/singlesearch/shows?q=${name}&appId=${environment.appId}`); 

    var programDetails:Observable<ItvProgramDetails> = apiData.pipe(map(apiData => this.transformToITVProgramDetails(apiData)));

    return programDetails;

    //return this.httpClient.get<IapiData>(`${environment.baseURL}api.tvmaze.com/singlesearch/shows?q=${name}&appId=${environment.appId}`).pipe(map(data => this.transformToITVProgramDetails(data)));
  }

  private transformToITVProgramDetails(data: IapiData): ItvProgramDetails{
    return{
      //programUrl: data.show.url,
      programName: data.name,
      programLanguage: data.language,
      telecastTime: data.schedule.time,
      //telecastDays: data.schedule.days,
      //networkName: data.network.name,
      //programImage: data.image.medium,
      programSummary: data.summary,

    }
  }

}
