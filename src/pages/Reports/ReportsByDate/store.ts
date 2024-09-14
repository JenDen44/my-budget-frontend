import { makeAutoObservable } from 'mobx';
import  { reportByPeriodValidator, type TReportByDate, type TReportsFilter } from 'entities';
import { LoadingStore } from 'stores';
import { api } from 'api';

export class ReportsByDateStore {
    reports: TReportByDate[] = [];

    loading = new LoadingStore();

    constructor() {
        makeAutoObservable(this);
    }

    save = (reports: TReportByDate[]): void => {
        this.reports = reports;
    };

    get = (params?: TReportsFilter): void => {
        if (params) {
            this.loading.byPromise(api.reports.getByDate(params)).then(reportByPeriodValidator).then(this.save);
        } else {
            this.save([]);
        }
    };
}