import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntriesResponseData, Entry, EntryResponseData} from '../common/types';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
    entriesUrl = `${environment.api.url}/entries`;
    // entriesUrl = `../assets/data/entries.json`;

  constructor(private http: HttpClient) {
  }

    index() {
        return this.http.get<EntriesResponseData>(this.entriesUrl);
    }

    get(id) {
      return this.http.get<EntryResponseData>(`${this.entriesUrl}/${id}`);
    }

    store(entry: Entry) {
      return this.http.post<EntryResponseData>(this.entriesUrl, entry);
    }

    update(id, entry: Entry) {
      return this.http.put<EntryResponseData>(`${this.entriesUrl}/${id}`, entry);
    }

    delete(id) {
      return this.http.delete<any>(`${this.entriesUrl}/${id}`);
    }
}
