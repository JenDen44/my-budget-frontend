import { errorSchema } from './schema';
import type { TError } from './types';

export const errorValidator = (data: unknown): Promise<TError> => errorSchema.parseAsync(data);