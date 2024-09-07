import type { z } from 'zod';
import type { purchaseFormSchema } from './schema';

export type TPurchaseFormValue = z.input<typeof purchaseFormSchema>;