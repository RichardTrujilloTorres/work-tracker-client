import { Component, OnInit } from '@angular/core';
import {PaginationService} from '../../../services/pagination/pagination.service';
import {NotificationService} from '../../../services/notifications/notification.service';
import {EntriesResponseData, Entry} from '../../../../common/types';
import {EntriesService} from '../../../services/http/entries/entries.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];
  public loading = false;
  pagination: PaginationService;

  constructor(
      private entry: EntriesService,
      private notificationsService: NotificationService
  ) {
      this.pagination = new PaginationService(1, 20);
  }

  ngOnInit() {
      this.getEntries();
  }

  getEntries() {
    this.loading = true;
    this.entry.index([
        {
            key: 'page',
            value: this.pagination.page as unknown as string,
        },
        {
            key: 'perPage',
            value: this.pagination.perPage as unknown as string,
        }
    ])
        .subscribe((data: EntriesResponseData) => {
          console.log(data.data.entries);
          this.entries = this.entries.concat(data.data.entries);
          this.unsetLoadingWithDelay();
          this.pagination.increase();
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
              this.reload();
          }, (err => {
              console.log(err);

              this.unsetLoadingWithDelay();
              this.notificationsService.error('An error occurred while attempting to remove the notification');
          }));
  }

  reload() {
      this.entries = [];
      this.pagination.page = 1;
      this.getEntries();
  }

  unsetLoadingWithDelay() {
      setTimeout(() => {
          this.loading = false;
      }, 1000);
  }
}
