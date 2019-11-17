import { Component, OnInit } from '@angular/core';
import {CommitsService} from '../../../services/http/commits/commits.service';
import {Commit, CommitsResponseData} from '../../../../common/types/commits';
import {PaginationService} from '../../../services/pagination/pagination.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  commits: Commit[] = [];
  public loading = false;
  pagination: PaginationService;

  constructor(
      private commitsService: CommitsService
  ) {
      this.pagination = new PaginationService(1, 20);
  }

  ngOnInit() {
    this.loadCommits();
  }

  loadCommits() {
    this.loading = true;
    this.commitsService.index([
        {
            key: 'page',
            value: this.pagination.page as unknown as string,
        },
        {
            key: 'perPage',
            value: this.pagination.perPage as unknown as string,
        }
    ])
        .subscribe((res: CommitsResponseData) => {
          console.log(res);
          this.commits = this.commits.concat(res.data.commits);
          this.unsetLoadingWithDelay();
          this.pagination.increase();
        },
        (err) => {
            console.log(err);
            this.unsetLoadingWithDelay();
        }
        );
  }

  unsetLoadingWithDelay() {
    setTimeout(() => {
        this.loading = false;
    }, 1000);
  }
}
