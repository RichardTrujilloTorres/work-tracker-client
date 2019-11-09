import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CommitsResponseData} from '../../../../common/types/commits';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  commitsUrl = `${environment.api.url}/commits`;

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<CommitsResponseData>(this.commitsUrl);
  }
}
