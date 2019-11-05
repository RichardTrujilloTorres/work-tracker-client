import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    private user: Observable<User>;

  constructor(private http: HttpClient) {
      this.userSubject = new BehaviorSubject<User>(
          JSON.parse(localStorage.getItem('user'))
      );
      this.user = this.userSubject.asObservable();
  }

  public currentUser(): User {
      return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.api.url}/login_check`,
        {
          username,
          password
        })
        .pipe(map(res => {
            const user: User = {
                username,
                password,
                token: res.token
            };

            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);

            return res;
        }));
  }

  logout() {
      localStorage.removeItem('user');
      this.userSubject.next(null);
  }
}
