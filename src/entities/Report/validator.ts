import { reportByCategoriesSchema, reportByPeriodSchema } from './schema';
import type { TReportByDate, TReportByCategory } from './types';

export const reportByPeriodValidator = (data: unknown): Promise<TReportByDate[]> =>
    reportByPeriodSchema.parseAsync(data);

export const reportByCategoriesValidator = (data: unknown): Promise<TReportByCategory[]> =>
    reportByCategoriesSchema.parseAsync(data);