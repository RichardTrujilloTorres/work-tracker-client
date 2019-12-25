import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsComponent } from './commits.component';
import {PipesModule} from '../../../pipes/pipes.module';
import {LoaderComponent} from '../../../components/common/loader/loader.component';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CommitsComponent', () => {
  let component: CommitsComponent;
  let fixture: ComponentFixture<CommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsComponent, LoaderComponent],
      imports: [
        HttpClientTestingModule,
        PipesModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.circle
        }),
        InfiniteScrollModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
