import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEntriesComponent } from './daily-entries.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DailyEntriesComponent', () => {
  let component: DailyEntriesComponent;
  let fixture: ComponentFixture<DailyEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEntriesComponent ],
      imports: [
          HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
