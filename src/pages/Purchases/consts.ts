import type { TPurchaseCategoryLabels, TPurchaseCategoryOption } from './types';

export const PURCHASE_CATEGORY_LABELS: TPurchaseCategoryLabels = {
    FOOD: 'Еда',
    CLOTHE: 'Одежда',
    EDUCATION: 'Образование',
    ENTERTAINMENT: 'Развлечение'
};

export const PURCHASE_CATEGORY_OPTIONS: TPurchaseCategoryOption[] = [
    { value: 'FOOD', label: 'Еда' },
    { value: 'CLOTHE', label: 'Одежда' },
    { value: 'EDUCATION', label: 'Образование' },
    { value: 'ENTERTAINMENT', label: 'Развлечение' },
];