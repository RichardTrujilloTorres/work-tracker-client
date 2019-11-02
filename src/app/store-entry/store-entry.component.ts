import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-store-entry',
  templateUrl: './store-entry.component.html',
  styleUrls: ['./store-entry.component.css']
})
export class StoreEntryComponent implements OnInit {
    entryForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.entryForm = new FormGroup({
      description: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          // TODO custom validator
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
    console.log('submit');
    console.log(this.entryForm.value);
    console.log(this.entryForm.getRawValue());
  }

}
