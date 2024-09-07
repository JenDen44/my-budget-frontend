import { tokensSchema } from './schema';
import type { TTokens } from './types';

export const tokensValidator = (data: unknown): Promise<TTokens> => tokensSchema.parseAsync(data);