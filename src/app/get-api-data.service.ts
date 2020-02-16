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
      programId: data.id,
      programUrl: `${environment.baseURL}tvmaze.com/shows/${data.id}/${data.name}`,
      programName: data.name,
      programLanguage: data.language,
      telecastTime: data.schedule.time,
      telecastDays: data.schedule.days,
      networkName: data.network.name,
      programImage: `${environment.baseURL}static.tvmaze.com/uploads/images/medium_portrait/${environment.imageCode}.jpg`,
      programSummary: data.summary,

    }
  }

}
