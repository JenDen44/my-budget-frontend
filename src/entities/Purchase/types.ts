import type { z } from 'zod';
import type { purchaseCategorySchema, purchaseSchema } from './schema';

export type TPurchaseCategory = z.infer<typeof purchaseCategorySchema>;

export type TPurchase = z.infer<typeof purchaseSchema>;

export type TNewPurchase = {
    category: TPurchaseCategory,
    cost: number,
    quantity: number,
    purchaseDate: string
};