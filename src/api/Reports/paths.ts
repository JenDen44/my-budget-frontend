import { paths } from 'clients';

class ReportsPaths {
    static reportsByDate = `${paths.API_PATH}/reports/table`;

    static reportsByCategory = `${paths.API_PATH}/reports/chart`;
}

export const reportsPaths = ReportsPaths;