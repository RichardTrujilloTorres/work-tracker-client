import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BranchesService} from '../../services/http/GitHub/branches/branches.service';
import {CommitsService} from '../../services/http/GitHub/commits/commits.service';
import {RepositoriesService} from '../../services/http/GitHub/repositories/repositories.service';
import {RepositoriesResponseData} from '../../../common/types/repositories';

@Component({
  selector: 'app-entry-commit',
  templateUrl: './entry-commit.component.html',
  styleUrls: ['./entry-commit.component.css']
})
export class EntryCommitComponent implements OnInit {
    @Output() addCommits: EventEmitter<any> = new EventEmitter();

  public loading = false;
  entryCommitsForm: FormGroup;
  repositories: any[] = [];
  branches: string[] = [];
  commits: any[] = [];

  constructor(
      private repositoriesService: RepositoriesService,
      private branchesService: BranchesService,
      private commitsService: CommitsService
  ) {
  }

  ngOnInit() {
    this.entryCommitsForm = new FormGroup({
      repository: new FormControl('', [
        Validators.required,
      ]),
      branch: new FormControl('', [
        Validators.required,
      ])
    });

    this.load();
  }

  private load() {
    this.getRepositories();
  }

  getRepositories() {
    this.loading = true;
    this.repositoriesService.get()
      .subscribe((res: RepositoriesResponseData)  => {
        this.loading = false;
        this.repositories = res.data.repositories;

        this.entryCommitsForm.get('repository').setValue(this.repositories[0].name);
        this.getBranches(this.repositories[0].name);
      });
  }

  getBranches(repository: string) {
    if (this.branches[repository] !== undefined) {
        this.entryCommitsForm.get('branch').setValue(this.branches[repository][0].name);
        return;
    }

    this.loading = true;
    this.branchesService.getBranches(repository)
        .subscribe((res: any) => {
          this.loading = false;

          this.branches[repository] = res.data.branches;
          this.entryCommitsForm.get('branch').setValue(this.branches[repository][0].name);
        });
  }

  getCommits(repository: string, branch: string) {
    this.loading = true;
    this.commitsService.getCommits(repository, branch)
        .subscribe((res: any) => {
          this.loading = false;
          this.commits = res.data.commits;
        }, (err: any) => {
            this.loading = false;
            console.log(err);
        });
  }

  onSearch() {
      const repository = this.entryCommitsForm.get('repository').value;
      const branch = this.entryCommitsForm.get('branch').value;

      this.getCommits(repository, branch);
  }

  onAdd() {
    this.addCommits.emit({
        commits: this.commits,
        repository: this.entryCommitsForm.get('repository').value,
        branch: this.entryCommitsForm.get('branch').value
    });
  }

}
