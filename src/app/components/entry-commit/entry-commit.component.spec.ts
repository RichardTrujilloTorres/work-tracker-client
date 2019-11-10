import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCommitComponent } from './entry-commit.component';

describe('EntryCommitComponent', () => {
  let component: EntryCommitComponent;
  let fixture: ComponentFixture<EntryCommitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCommitComponent ]
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
