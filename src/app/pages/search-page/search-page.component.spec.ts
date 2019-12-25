import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageComponent } from './search-page.component';
import {NgAisModule} from 'angular-instantsearch';
import {RouterTestingModule} from '@angular/router/testing';
import {PipesModule} from '../../pipes/pipes.module';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      imports: [
        NgAisModule.forRoot(),
        RouterTestingModule,
        PipesModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
