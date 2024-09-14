import { clients } from 'clients';
import type { TReportsFilter } from 'entities';
import { reportsPaths } from './paths';

export class ReportsApi {
    getByDate = (params: TReportsFilter): Promise<unknown> =>
        clients.authorized.get(reportsPaths.reportsByDate, { params });

    getByCategory = (params: TReportsFilter): Promise<unknown> =>
        clients.authorized.get(reportsPaths.reportsByCategory, { params });
}