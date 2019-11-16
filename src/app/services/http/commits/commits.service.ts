import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CommitsResponseData} from '../../../../common/types/commits';
import {Param} from '../../../../common/types';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  params: HttpParams;
  commitsUrl = `${environment.api.url}/commits`;


  constructor(private http: HttpClient) {
    this.params = new HttpParams();
  }

  index(params: Param[] = []) {
    if (params) {
      params.map(param => this.params = this.params.set(param.key, param.value));
    }

    return this.http.get<CommitsResponseData>(`${this.commitsUrl}?${this.params.toString()}`);
  }
}
