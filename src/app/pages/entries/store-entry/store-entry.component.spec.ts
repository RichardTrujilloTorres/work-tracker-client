import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEntryComponent } from './store-entry.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EntryCommitModalComponent} from '../../../components/entry-commit-modal/entry-commit-modal.component';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {EntryCommitComponent} from '../../../components/entry-commit/entry-commit.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('StoreEntryComponent', () => {
  let component: StoreEntryComponent;
  let fixture: ComponentFixture<StoreEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEntryComponent, EntryCommitModalComponent, EntryCommitComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.circle
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
