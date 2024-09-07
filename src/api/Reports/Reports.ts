import { clients } from 'clients';
import type { TReportsFilter } from 'entities';
import { reportsPaths } from './paths';

export class ReportsApi {
    getByDate = (filter: TReportsFilter): Promise<unknown> => clients.authorized.get(reportsPaths.getByDate(filter));

    getByDateNew = (params: TReportsFilter): Promise<unknown> => clients.authorized.get(reportsPaths.byDate, { params });

    getByCategory = (filter: TReportsFilter): Promise<unknown> => clients.authorized.get(reportsPaths.getByCategory(filter));
}