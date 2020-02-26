import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IapiData } from './iapi-data';
import { ItvProgramDetails } from './itv-program-details';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IarrayTvprogramDetails } from './iarray-tvprogram-details';
import { IarrayApidata } from './iarray-apidata';
import { IGetdataService } from './igetdata-service';

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService implements IGetdataService {

  constructor(private httpClient: HttpClient) { }

  getProgramListDetails(name: string): Observable<IarrayTvprogramDetails>{
    // let uriParams = '';
    // let len = name.length;

    // uriParams = `q=${name[0]}`;
    // if(len > 1){
    //   for(let i=0; i<len; i++){
    //     uriParams = `${uriParams}&${name[i]}`;
    //   }
    // }
    return this.httpClient.get<IarrayApidata>(`${environment.baseURL}api.tvmaze.com/search/shows?q=${name}&appId=${environment.appId}`).pipe(map(data => this.transformToIArrayTvProgramDetails(data)));
  }

  private transformToIArrayTvProgramDetails(dataList: IarrayApidata): IarrayTvprogramDetails{
  //  console.log(dataList);
    
    var len: number = dataList.length;
//    console.log("The length of the JSON object returned is " + len);

    var arrayOfPrograms: IarrayTvprogramDetails = new Array();

    for(let i=0; i<len; i++)  
      {
        arrayOfPrograms.push({
          programId: dataList[i].show.id, 
          programUrl: `${environment.baseURL}tvmaze.com/shows/${dataList[i].show.id}/${dataList[i].show.name}`,
          programName: dataList[i].show.name,
          programLanguage: dataList[i].show.language,
          telecastTime: dataList[i].show.schedule.time,
          telecastDays: dataList[i].show.schedule.days,
          networkName: dataList[i].show.network!=null ? dataList[i].show.network.name : "Not telecasted on TV network",
          webChannelName: dataList[i].show.webChannel!=null ? dataList[i].show.webChannel.name: "Not telecasted on Web Channel",
          programImage: dataList[i].show.image!=null ? dataList[i].show.image.medium : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png",
          programSummary: dataList[i].show.summary,
        } as ItvProgramDetails);
      }
    return arrayOfPrograms;
  }
}
