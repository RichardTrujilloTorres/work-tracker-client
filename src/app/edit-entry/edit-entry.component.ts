import { Component, OnInit } from '@angular/core';
import {Entry} from '../../common/types';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EntriesService} from '../entries.service';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {
    entry: Entry;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private entriesService: EntriesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.entriesService.getEntry(id)
        .then((data: Entry) => {
            this.entry = data;
        });
  }
}
