import type { z } from 'zod';
import type { errorFieldSchema, errorSchema } from './schema';

export type TErrorField = z.infer<typeof errorFieldSchema>;

export type TError = z.infer<typeof errorSchema>;