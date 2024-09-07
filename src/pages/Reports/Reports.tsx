import { useEffect, type ReactElement } from 'react';
import { api } from 'api';

export const Reports = (): ReactElement => {
    useEffect(() => {
        const filter = { startDate: '2024-08-20', endDate: '2024-09-03' };
        // api.reports.getByDate(filter).then(console.log);
        api.reports.getByDateNew(filter).then(console.log);
        // api.reports.getByCategory(filter).then(console.log);
    });
    return <>Аналитика</>;
};