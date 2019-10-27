import { Component, OnInit } from '@angular/core';
import {EntriesService} from '../entries.service';
import {Entry, EntryResponseData} from '../../common/types';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];
  public loading = false;

  constructor(private entry: EntriesService) { }

  ngOnInit() {
      this.getEntries();
  }

  getEntries() {
    this.loading = true;
    this.entry.getEntries()
        .subscribe((data: EntryResponseData) => {
          console.log(data.data.entries);
          this.entries = data.data.entries;
          this.unsetLoadingWithDelay();
        }, (err => {
            console.log(err);
            this.unsetLoadingWithDelay();
        }));
  }

  unsetLoadingWithDelay() {
      setTimeout(() => {
          this.loading = false;
      }, 1000);
  }
}
