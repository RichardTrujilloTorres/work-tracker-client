import {Commit} from '../../../common/types/commits';

export function gitHubToDomainCommit(commit: any, repository: string, branch: string): Commit {
    return {
        sha: commit.sha,
        repository,
        branch,
        date: commit.commit.committer.date
    };
}
