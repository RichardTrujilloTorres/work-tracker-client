import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import config from '../assets/config.json';
import {Observable} from 'rxjs';
import {Entry, EntryResponseData} from '../common/types';
import EntriesData from '../assets/data/entries.json';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
    // entriesUrl = `${config.baseUrl}/${config.entries.uri}`
    entriesUrl = `../assets/data/entries.json`

  constructor(private http: HttpClient) {
  }

    getEntries() {
        return this.http.get<EntryResponseData>(this.entriesUrl)
        // return this.http.get(EntriesData)
    }
  /*
  getEntries(): Observable<Entry[]> {
      return this.http.get(this.entriesUrl)
  }
  */
}
