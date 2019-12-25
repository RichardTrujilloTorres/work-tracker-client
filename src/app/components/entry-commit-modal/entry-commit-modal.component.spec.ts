import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCommitModalComponent } from './entry-commit-modal.component';
import {EntryCommitComponent} from '../entry-commit/entry-commit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EntryCommitModalComponent', () => {
  let component: EntryCommitModalComponent;
  let fixture: ComponentFixture<EntryCommitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCommitModalComponent, EntryCommitComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.circle
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCommitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
