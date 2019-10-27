import { DateFormatPipe } from './date-format.pipe';
import {async, TestBed} from '@angular/core/testing';

describe('DateFormatPipe', () => {
  let dateFormat: DateFormatPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    });

    dateFormat = new DateFormatPipe('en-US');
  }));

  it('create an instance', () => {
    expect(dateFormat).toBeDefined();
  });
});
