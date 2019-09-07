import DateTimeFormat = Intl.DateTimeFormat;

export interface ResponseData {
    data: object;
}

export interface EntryResponseData {
    data: EntryData;
}

export interface EntryData {
    entries: Entry[];
}

export interface Entry {
    id: number;
    description: string;
    startTime: DateTimeFormat;
    endTime: DateTimeFormat;
    commits: [];
}

