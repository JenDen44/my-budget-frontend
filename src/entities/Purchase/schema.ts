import { z } from 'zod';
import { paginationResponseSchema } from 'entities/Pagination';

export const purchaseCategorySchema = z.union([
    z.literal('FOOD'),
    z.literal('CLOTHING'),
    z.literal('EDUCATION'),
    z.literal('ENTERTAINMENT'),
    z.literal('HOUSING'),
    z.literal('TRANSPORTATION'),
    z.literal('HEALTHCARE'),
    z.literal('UTILITIES'),
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

export const purchasesResponseSchema = paginationResponseSchema.merge(z.object({
    content: purchaseSchema.array()
}));
