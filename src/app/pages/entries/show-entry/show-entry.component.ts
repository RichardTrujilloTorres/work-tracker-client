import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Entry, EntryResponseData} from '../../../../common/types';
import {EntriesService} from '../../../services/http/entries/entries.service';
import {NotificationService} from '../../../services/notifications/notification.service';

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.css']
})
export class ShowEntryComponent implements OnInit {
  entry: Entry;
  public loading = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private entriesService: EntriesService,
      private notificationsService: NotificationService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.loading = true;
    this.entriesService.get(id)
        .subscribe((data: EntryResponseData) => {
          this.loading = false;
          this.entry = data.data.entry;
        }, (err: any) => {
            this.loading = false;
            this.notificationsService.error('Error loading entry');
            console.log(err);
        });
  }
}
