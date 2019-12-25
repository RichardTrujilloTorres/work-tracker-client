import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCommitComponent } from './entry-commit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EntryCommitComponent', () => {
  let component: EntryCommitComponent;
  let fixture: ComponentFixture<EntryCommitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCommitComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.circle
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
