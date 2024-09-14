import { BarChart, DonutLarge } from '@mui/icons-material';
import type { TReportBar, TReportColors } from './types';

export const REPORT_BARS: TReportBar[] = [
    { dataKey: 'CLOTHE', fill: 'green' },
    { dataKey: 'EDUCATION', fill: 'red' },
    { dataKey: 'ENTERTAINMENT', fill: 'blue' },
    { dataKey: 'FOOD', fill: 'orange' },
];

export const REPORT_COLORS: TReportColors = {
    CLOTHE: 'green',
    EDUCATION: 'red',
    ENTERTAINMENT: 'blue',
    FOOD: 'orange'
};

export const PAGES = [
    { path: '/reports/by-date', Icon: BarChart },
    { path: '/reports/by-category', Icon: DonutLarge },
];

export const PAGE_ROUTES = [ '/reports/by-date', '/reports/by-category' ];