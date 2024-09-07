import type { TNewPurchase } from 'entities';
import { purchaseFormValidatorSchema } from './schema';

export const purchaseFormValidator = (data: unknown): Promise<TNewPurchase> => purchaseFormValidatorSchema.parseAsync(data);