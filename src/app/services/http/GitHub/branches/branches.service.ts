import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
    url = `${environment.api.url}/github/repositories`;

  constructor(private http: HttpClient) { }

  getBranches(repository: string) {
      // const branchesUrl = repository.branches_url.replace('{/branch}', ''); // 401 through direct access

      return this.http.get<any>(`${this.url}/${repository}/branches`);
  }
}
