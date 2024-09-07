import type { TPurchaseCategory } from 'entities';

export type TPurchaseCategoryLabels = Record<TPurchaseCategory, string>;

export type TPurchaseCategoryOption = {
    value: TPurchaseCategory;
    label: string;
};