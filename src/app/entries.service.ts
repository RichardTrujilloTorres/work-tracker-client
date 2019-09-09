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
    }

    async getEntry(id) {
        let entry;

        const entries  = await this.http.get(this.entriesUrl);

        await entries.toPromise()
            .then((data: EntryResponseData) => {
                const result = data.data.entries.filter(single => single.id == id);

                entry = result[0];
            });

        return entry;
    }
}
