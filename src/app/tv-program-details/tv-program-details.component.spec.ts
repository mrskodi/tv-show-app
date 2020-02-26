import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvProgramDetailsComponent } from './tv-program-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FakeGetApiDataService } from '../fake-get-api-data.service';
import { GetApiDataService } from '../get-api-data.service';


describe('TvProgramDetailsComponent', () => {
  let component: TvProgramDetailsComponent;
  let fixture: ComponentFixture<TvProgramDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvProgramDetailsComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: GetApiDataService, useClass: FakeGetApiDataService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvProgramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
