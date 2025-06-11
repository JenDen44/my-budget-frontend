import { z } from 'zod';

export const paginationResponseSchema = z.object({
    pageNumber: z.number(),
    pageSize: z.number(),
    totalElements: z.number(),
    totalPages: z.number()
});