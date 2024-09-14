import { z } from 'zod';
import { purchaseCategorySchema } from '../Purchase';

export const reportByDateSchema = z.object({
    date: z.string(),
    purchasesByCategory: z.record(purchaseCategorySchema, z.number())
}).transform((data) => {
    const { date, purchasesByCategory } = data;

    return {
        date: new Date(date),
        ...purchasesByCategory
    };
});

export const reportByPeriodSchema = reportByDateSchema.array();

export const reportByCategorySchema = z.object({
    category: purchaseCategorySchema,
    total: z.number()
});

export const reportByCategoriesSchema = reportByCategorySchema.array();