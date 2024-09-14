import { makeAutoObservable } from 'mobx';
import  { reportByCategoriesValidator, type TReportByCategory, type TReportsFilter } from 'entities';
import { LoadingStore } from 'stores';
import { api } from 'api';

export class ReportsByCategoryStore {
    reports: TReportByCategory[] = [];

    loading = new LoadingStore();

    constructor() {
        makeAutoObservable(this);
    }

    save = (reports: TReportByCategory[]): void => {
        this.reports = reports;
    };

    get = (params?: TReportsFilter): void => {
        if (params) {
            this.loading.byPromise(api.reports.getByCategory(params)).then(reportByCategoriesValidator).then(this.save);
        } else {
            this.save([]);
        }
    };
}