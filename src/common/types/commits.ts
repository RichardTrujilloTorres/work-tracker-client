export interface CommitResponseData {
    data: CommitData;
}

export interface CommitsResponseData {
    data: CommitsData;
}

export interface CommitData {
    commit: Commit;
}

export interface CommitsData {
    commits: Commit[];
}

export interface Commit {
    id?: number;
    branch: string;
    commitsNumber?: number;
    date: Date;
    entry?: number;
    repository: string;
    sha?: string;
}

