import type { z } from 'zod';
import type { TPaginationParams } from '../Pagination';
import type { purchaseCategorySchema, purchaseSchema, purchasesResponseSchema } from './schema';

export type TPurchaseCategory = z.infer<typeof purchaseCategorySchema>;

export type TPurchaseBackend = z.input<typeof purchaseSchema>;

export type TPurchase = z.infer<typeof purchaseSchema>;

export type TPurchaseResponse = z.infer<typeof purchasesResponseSchema>;

export type TNewPurchase = {
    category: TPurchaseCategory,
    cost: number,
    quantity: number,
    purchaseDate: string
};

export type TPurchaseSortBy = keyof TPurchaseBackend;

export type TPurchaseParams = TPaginationParams<TPurchaseSortBy>;