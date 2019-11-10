import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-entry-commit-modal',
  templateUrl: './entry-commit-modal.component.html',
  styleUrls: ['./entry-commit-modal.component.css']
})
export class EntryCommitModalComponent implements OnInit {
  @ViewChild('closeCommitsModal', {static: false}) closeCommitsModal: ElementRef;
  @Output() addCommits: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddCommits({commits, repository, branch}) {
    this.addCommits.emit({commits, repository, branch});
    this.close();
  }

  close() {
    this.closeCommitsModal.nativeElement.click();
  }
}
