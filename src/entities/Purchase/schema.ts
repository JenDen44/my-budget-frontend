import { z } from 'zod';

export const purchaseCategorySchema = z.union([
    z.literal('FOOD'),
    z.literal('CLOTHE'),
    z.literal('EDUCATION'),
    z.literal('ENTERTAINMENT'),
], { required_error: 'Выберите категорию' });

export const purchaseSchema = z.object({
    id: z.number(),
    category: purchaseCategorySchema,
    cost: z.number(),
    quantity: z.number(),
    totalCost: z.number(),
    purchaseDate: z.string()
}).transform((data) => {
    const { purchaseDate, ...other } = data;

    return { date: new Date(purchaseDate), ...other };
});

export const purchasesSchema = purchaseSchema.array();
