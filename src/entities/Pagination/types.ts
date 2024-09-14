export type TSortDirection = 'asc' | 'desc';

export type TPaginationParams<T extends string> = {
    pageNo?: number;
    pageSize?: number;
    sortBy?: T;
    sortDir?: TSortDirection;
}