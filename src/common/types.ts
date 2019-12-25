import {Commit} from './types/commits';

export interface ResponseData {
    data: object;
}

export interface ProfileResponseData {
    data: ProfileData;
}

export interface EntryResponseData {
    data: EntryData;
}

export interface EntriesResponseData {
    data: EntriesData;
}

export interface ProfileData {
    profile: Profile;
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

export interface Profile {
    firstname?: string;
    lastname?: string;
}
export interface Param {
    key: string;
    value: string;
}

export interface Time {
    hour: number;
    minute: number;
    second: number;
}

