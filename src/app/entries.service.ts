import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entry, EntryResponseData} from '../common/types';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
    // entriesUrl = `${config.baseUrl}/${config.entries.uri}`
    entriesUrl = `../assets/data/entries.json`;

  constructor(private http: HttpClient) {
  }

    getEntries() {
        return this.http.get<EntryResponseData>(this.entriesUrl);
    }

    async getEntry(id) {
        let entry;

        const entries  = await this.http.get(this.entriesUrl);

        await entries.toPromise()
            .then((data: EntryResponseData) => {
                console.log('get entry');
                console.log(data);
                entry = data.data.entries.find(single => single.id === id);
            });

        return entry;
    }
}
