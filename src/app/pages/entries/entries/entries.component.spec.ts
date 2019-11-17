import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesComponent } from './entries.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {DateFormatPipe} from '../../../pipes/date-format/date-format.pipe';

describe('EntriesComponent', () => {
  let component: EntriesComponent;
  let fixture: ComponentFixture<EntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.circle
        }),
      ],
      declarations: [ EntriesComponent, DateFormatPipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
