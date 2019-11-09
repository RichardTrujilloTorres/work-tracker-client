import {Commit} from './types/commits';

export interface ResponseData {
    data: object;
}

export interface EntryResponseData {
    data: EntryData;
}

export interface EntriesResponseData {
    data: EntriesData;
}

export interface EntryData {
    entry: Entry;
}

export interface EntriesData {
    entries: Entry[];
}

export interface Entry {
    id: number;
    description: string;
    startTime: Date;
    endTime: Date;
    commits: Commit[];
}

