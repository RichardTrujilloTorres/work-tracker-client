import {TestBed} from '@angular/core/testing';

import { EntriesService } from './entries.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {EntriesResponseData, Entry} from '../../../../common/types';

describe('EntriesService', () => {
  let entriesService: EntriesService;

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
    }];

  const expectedEntriesResponse: EntriesResponseData = {
    data: {
        entries: expectedEntries
    }
  };

  const entriesServiceStub = {
      index: () => of(expectedEntriesResponse)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
            provide: EntriesService,
            useValue: entriesServiceStub
        }]
    });

    entriesService = TestBed.get(EntriesService);
  });

  it('should be created', () => {
      expect(entriesService).toBeTruthy();
  });

  it('should return the entries listing', () => {
      entriesService.index()
        .subscribe((res: EntriesResponseData) => {
          expect(res.data.entries).toEqual(expectedEntries);
        });
  });
});
