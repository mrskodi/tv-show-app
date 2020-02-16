import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvProgramDetailsComponent } from './tv-program-details.component';


describe('TvProgramDetailsComponent', () => {
  let component: TvProgramDetailsComponent;
  let fixture: ComponentFixture<TvProgramDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvProgramDetailsComponent ]
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
