export interface ResponseData {
    data: object;
}

export interface EntryResponseData {
    data: EntryData;
}

export interface EntryData {
    entries: Entry[];
}

export interface Commit {
    id: number;
    branch: string;
    commitsNumber: number;
    date: Date;
    entry: number;
    repository: string;
}

export interface Entry {
    id: number;
    description: string;
    startTime: Date;
    endTime: Date;
    commits: Commit[];
}

