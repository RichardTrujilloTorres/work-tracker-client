import { TestBed } from '@angular/core/testing';

import { EntriesService } from './entries.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Entry, EntryResponseData} from '../common/types';
import {asyncData} from '../../testing/async-observable-helpers';

describe('EntriesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let entriesService: EntriesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    entriesService = new EntriesService(httpClientSpy);
  });

  it('should be created', () => {
    expect(entriesService).toBeTruthy();
  });

  it('should return the entries listing (HttpClient called once)', () => {
    const expectedEntries: Entry[] = [
      {
        id: 3,
        startTime: new Date('2019-08-19T08:37:00+00:00'),
        endTime: new Date('2019-08-19T10:40:00+00:00'),
        description: 'Order return resources',
        commits: [
          {
            id: 77,
            repository: '(private)',
            branch: 'dev',
            commitsNumber: 33,
            date: new Date('2019-08-25T12:15:00+00:00'),
            entry: 3
          }
        ]
      },
      {
        id: 4,
        startTime: new Date('2019-08-19T08:37:00+00:00'),
        endTime: new Date('2019-08-19T10:40:00+00:00'),
        description: 'Work Tracker tests',
        commits: [
          {
            id: 81,
            repository: 'work-tracker-client',
            branch: 'develop',
            commitsNumber: 4,
            date: new Date('2019-08-25T12:15:00+00:00'),
            entry: 4
          }
        ]
      }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedEntries));

    entriesService.getEntries()
        .subscribe((res: EntryResponseData) => {
          console.log('--- res');
          console.log(res);

          expect(res.data.entries).toEqual(expectedEntries);
        });

  });
});
