import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntryComponent } from './edit-entry.component';
import {DateFormatPipe} from '../pipes/date-format/date-format.pipe';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EditEntryComponent', () => {
  let component: EditEntryComponent;
  let fixture: ComponentFixture<EditEntryComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      paramMap: {
        get(): number {
          return 1;
        }
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpClientTestingModule
      ],
      declarations: [EditEntryComponent, DateFormatPipe],
      providers: [
          {
            provide: ActivatedRoute,
            useValue: fakeActivatedRoute
          },
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
