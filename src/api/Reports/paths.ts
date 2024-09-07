import type { TReportsFilter } from 'entities';

class ReportsPaths {
    static getByDate = (filter: TReportsFilter): string => `/api/reports/table/${filter.startDate}/${filter.endDate}`;

    static byDate = '/api/reports/table';

    static getByCategory = (filter: TReportsFilter): string => `/api/reports/chart/${filter.startDate}/${filter.endDate}`;
}

export const reportsPaths = ReportsPaths;