import { z } from 'zod';

export const errorFieldSchema = z.object({
    field: z.string(),
    message: z.string()
});

export const errorSchema = z.object({
    code: z.number(),
    message: z.string(),
    fields: errorFieldSchema.array().nullish()
});