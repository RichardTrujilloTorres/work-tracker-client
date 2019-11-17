import {async, TestBed} from '@angular/core/testing';

import { EntriesService } from './entries.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {EntriesResponseData, Entry} from '../../../../common/types';

describe('EntriesService', () => {
  let entriesService: EntriesService;
  let entriesServiceSpy: jasmine.SpyObj<EntriesService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
          {
              provide: EntriesService,
              useValue: entriesServiceSpy
          }
      ]
    });

    // entriesServiceSpy = jasmine.createSpyObj('EntriesService', ['getEntries', 'getEntry']);
    entriesServiceSpy = jasmine.createSpyObj('EntriesService', ['index', 'get']);
    entriesService = TestBed.get(EntriesService);

    console.log('------ entries service on before each');
    console.log(entriesService);
  });

  it('should be created', () => {
      console.log('------- should be created');
      console.log(entriesService);
      expect(entriesService).toBeTruthy();
  });

  it('should return the entries listing (entries service called once)', async(() => {
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
        const expectedEntriesResponse: EntriesResponseData = {
            data: {
                entries: expectedEntries
            }
        };

        entriesServiceSpy.index.and.returnValue(of(expectedEntriesResponse));

        entriesService.index()
          .subscribe((res: EntriesResponseData) => {
              console.log('--- res');
              console.log(res);

              expect(res.data.entries).toEqual(expectedEntries);
          });

        expect(entriesServiceSpy.index.calls.count()).toBe(1, 'called once');
    }));
});
