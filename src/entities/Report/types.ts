import type { z } from 'zod';
import type { reportByCategorySchema, reportByDateSchema } from './schema';

export type TReportsFilter = {
    startDate: string;
    endDate: string;
}

export type TReportByDate = z.infer<typeof reportByDateSchema>;

export type TReportByCategory = z.infer<typeof reportByCategorySchema>;