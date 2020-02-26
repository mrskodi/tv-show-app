import {Observable} from 'rxjs';
import { IarrayTvprogramDetails } from './iarray-tvprogram-details';


export interface IGetdataService {
  getProgramListDetails(name: string): Observable<IarrayTvprogramDetails>
}

