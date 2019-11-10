import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCommitModalComponent } from './entry-commit-modal.component';

describe('EntryCommitModalComponent', () => {
  let component: EntryCommitModalComponent;
  let fixture: ComponentFixture<EntryCommitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCommitModalComponent ]
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
