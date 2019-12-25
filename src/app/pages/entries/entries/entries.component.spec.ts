import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesComponent } from './entries.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {PipesModule} from '../../../pipes/pipes.module';
import {LoaderComponent} from '../../../components/common/loader/loader.component';
import {RouterTestingModule} from '@angular/router/testing';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

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
        InfiniteScrollModule,
        RouterTestingModule,
        PipesModule,
      ],
      declarations: [ EntriesComponent, LoaderComponent ]
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
