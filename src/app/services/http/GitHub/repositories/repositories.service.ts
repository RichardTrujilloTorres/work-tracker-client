import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {RepositoriesResponseData} from '../../../../../common/types/repositories';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  url = `${environment.api.url}/github/repositories`;

  constructor(private http: HttpClient) { }

  get() {
      return this.http.get<RepositoriesResponseData>(this.url);
  }
}
