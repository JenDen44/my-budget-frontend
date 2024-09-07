import { endOfDay } from 'date-fns';
import { z } from 'zod';
import type { TNewPurchase } from 'entities';
import { purchaseCategorySchema } from 'entities/Purchase/schema';
import { formatBackendDate } from 'helpers';

export const purchaseFormSchema = z.object({
    date: z.date({ required_error: 'Выберите дату' }).max(endOfDay(new Date()), 'Выбери другую дату'),
    category: purchaseCategorySchema,
    cost: z.number({ required_error: 'Введите цену' })
        .refine((val) => val > 0, { message: 'Цена должна быть больше 0' }),
    quantity: z.number({ required_error: 'Введите количество' })
        .refine((val) => val > 0, { message: 'Количество должно быть больше 0' })
});

export const purchaseFormValidatorSchema = purchaseFormSchema.transform((data): TNewPurchase => {
    const { date, ...other } = data;

    return { ...other, purchaseDate: formatBackendDate(date) };
});