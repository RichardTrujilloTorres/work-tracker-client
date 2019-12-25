import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import {DailyEntriesComponent} from '../../components/charts/daily-entries/daily-entries.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPageComponent, DailyEntriesComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
