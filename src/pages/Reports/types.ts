import type { TPurchaseCategory } from 'entities';

export type TReportBar = {
    dataKey: TPurchaseCategory,
    fill: string;
}

export type TReportColors = Record<TPurchaseCategory, string>;