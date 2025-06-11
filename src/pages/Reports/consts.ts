import { BarChart, DonutLarge } from '@mui/icons-material';
import type { TReportBar, TReportColors } from './types';

export const REPORT_BARS: TReportBar[] = [
    { dataKey: 'CLOTHING', fill: 'green' },
    { dataKey: 'EDUCATION', fill: 'red' },
    { dataKey: 'ENTERTAINMENT', fill: 'blue' },
    { dataKey: 'FOOD', fill: 'orange' },
    { dataKey: 'HOUSING', fill: 'gray' },
    { dataKey: 'TRANSPORTATION', fill: 'pink' },
    { dataKey: 'HEALTHCARE', fill: 'brown' },
    { dataKey: 'UTILITIES', fill: 'yellow' },
];

export const REPORT_COLORS: TReportColors = {
    CLOTHING: 'green',
    EDUCATION: 'red',
    ENTERTAINMENT: 'blue',
    FOOD: 'orange',
    HOUSING: 'gray',
    TRANSPORTATION: 'pink',
    HEALTHCARE: 'brown',
    UTILITIES: 'yellow'
};

export const PAGES = [
    { path: '/reports/by-date', Icon: BarChart },
    { path: '/reports/by-category', Icon: DonutLarge },
];

export const PAGE_ROUTES = [ '/reports/by-date', '/reports/by-category' ];