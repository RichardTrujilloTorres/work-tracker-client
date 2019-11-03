import { Component, OnInit } from '@angular/core';
import {EntriesService} from '../entries.service';
import {EntriesResponseData, Entry} from '../../common/types';
import {NotificationService} from '../services/notifications/notification.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];
  public loading = false;

  constructor(
      private entry: EntriesService,
      private notificationsService: NotificationService
  ) { }

  ngOnInit() {
      this.getEntries();
  }

  getEntries() {
    this.loading = true;
    this.entry.index()
        .subscribe((data: EntriesResponseData) => {
          console.log(data.data.entries);
          this.entries = data.data.entries;
          this.unsetLoadingWithDelay();
        }, (err => {
            console.log(err);
            this.unsetLoadingWithDelay();
        }));
  }

  deleteEntry(entry: Entry) {
      this.loading = true;
      this.entry.delete(entry.id)
          .subscribe((data: any) => {
              console.log(data);

              this.unsetLoadingWithDelay();
              this.notificationsService.success('Entry removed');
              this.getEntries();
          }, (err => {
              console.log(err);

              this.unsetLoadingWithDelay();
              this.notificationsService.error('An error occurred while attempting to remove the notification');
          }));
  }

  unsetLoadingWithDelay() {
      setTimeout(() => {
          this.loading = false;
      }, 1000);
  }
}
