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

  constructor(private entry: EntriesService) { }

  ngOnInit() {
      this.getEntries();
  }

  getEntries() {
    this.entry.getEntries()
        .subscribe((data: EntryResponseData) => {
          console.log(data.data.entries);
          this.entries = data.data.entries;
        });
  }
}
