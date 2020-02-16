import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvProgramDetailsComponent } from './tv-program-details/tv-program-details.component';
import { ItvProgramDetails } from './itv-program-details';
import { GetApiDataService } from './get-api-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TvProgramDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
