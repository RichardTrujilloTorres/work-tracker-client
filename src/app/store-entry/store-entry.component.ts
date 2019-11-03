import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../services/notifications/notification.service';
import {EntriesService} from '../entries.service';
import {EntryResponseData} from '../../common/types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-store-entry',
  templateUrl: './store-entry.component.html',
  styleUrls: ['./store-entry.component.css']
})
export class StoreEntryComponent implements OnInit {
  entryForm: FormGroup;
  public loading = false;

  constructor(
      private notificationsService: NotificationService,
      private entriesService: EntriesService,
      private router: Router
  ) { }

  ngOnInit() {
    this.entryForm = new FormGroup({
      description: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
      ]),
      startTime: new FormControl('', [
        Validators.required,
      ]),
      endTime: new FormControl('', [
        Validators.required,
      ]),
      commits: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.entryForm.getRawValue());
    this.loading = true;

    this.entriesService.store(this.entryForm.value)
        .subscribe((res: EntryResponseData) => {
          this.notificationsService.success('Entry successfully created');
          this.unsetLoadingWithDelay();
          this.router.navigate(['/entries']);
        },
        (err: any) => {
          this.notificationsService.error('Could not create the entry');
          console.log(err);
          this.unsetLoadingWithDelay();
        });
  }

  unsetLoadingWithDelay() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
