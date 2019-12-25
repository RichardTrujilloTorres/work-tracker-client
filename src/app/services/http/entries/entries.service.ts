import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EntriesResponseData, Entry, EntryResponseData, Param} from '../../../../common/types';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
    params: HttpParams;
    entriesUrl = `${environment.api.url}/entries`;
    // entriesUrl = `../assets/data/entries.json`;

  constructor(private http: HttpClient) {
    this.params = new HttpParams();
  }

    index(params: Param[] = []) {
      if (params) {
        params.map(param => this.params = this.params.set(param.key, param.value));
      }

      return this.http.get<EntriesResponseData>(`${this.entriesUrl}?${this.params.toString()}`);
    }

    latest() {
        return this.http.get<EntriesResponseData>(`${this.entriesUrl}/latest`);
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
