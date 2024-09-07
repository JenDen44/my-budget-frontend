import { purchasesSchema } from './schema';
import type { TPurchase } from './types';

export const purchasesValidator = (data: unknown): Promise<TPurchase[]> => purchasesSchema.parseAsync(data);