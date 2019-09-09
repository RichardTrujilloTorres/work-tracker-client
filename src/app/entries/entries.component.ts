import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {EntriesService} from '../entries.service';
import {Entry, EntryResponseData} from '../../common/types';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class EntriesComponent implements OnInit {
  entriesFields = ['startTime', 'endTime', 'description', 'commits', 'actions'];
  entries: Entry[] = [];
  dataSource: any;

  constructor(private entry: EntriesService) { }

  ngOnInit() {
    this.entry.getEntries()
        .subscribe((data: EntryResponseData) => {
          console.log(data.data.entries);
          this.entries = data.data.entries;
          this.dataSource = new MatTableDataSource(this.entries);
        });
  }

  get format() {
    return 'yyyy.MM.dd';
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
