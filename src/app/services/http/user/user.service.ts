import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ProfileResponseData} from '../../../../common/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  profileUrl = `${environment.api.url}/user/profile`;

  constructor(private http: HttpClient) { }

  public getProfile(username: string) {
    return this.http.post<ProfileResponseData>(`${this.profileUrl}`, { username });
  }
}
