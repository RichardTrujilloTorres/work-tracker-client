import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEntryComponent } from './show-entry.component';
import {PipesModule} from '../../../pipes/pipes.module';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ShowEntryComponent', () => {
  let component: ShowEntryComponent;
  let fixture: ComponentFixture<ShowEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEntryComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        PipesModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.circle
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
