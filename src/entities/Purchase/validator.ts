import { purchasesResponseSchema } from './schema';
import type { TPurchaseResponse } from './types';

export const purchasesValidator = (data: unknown): Promise<TPurchaseResponse> => purchasesResponseSchema.parseAsync(data);