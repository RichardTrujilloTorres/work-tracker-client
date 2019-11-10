import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {ResponseData} from '../../../../../common/types';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  url = `${environment.api.url}/github/commits`;

  constructor(private http: HttpClient) { }

  getCommits(repository: string, branch: string) {
    return this.http.get<any>(`${this.url}/${repository}/${branch}`);
  }
}
