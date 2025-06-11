import type { z } from 'zod';
import type { paginationResponseSchema } from './schema';

export type TSortDirection = 'asc' | 'desc';

export type TPaginationParams<T extends string> = {
    pageNo?: number;
    pageSize?: number;
    sortBy?: T;
    sortDir?: TSortDirection;
}

export type TPaginationResponse = z.infer<typeof paginationResponseSchema>;