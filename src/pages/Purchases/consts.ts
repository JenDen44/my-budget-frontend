import type { TPurchaseCategoryLabels, TPurchaseCategoryOption } from './types';

export const PURCHASE_CATEGORY_LABELS: TPurchaseCategoryLabels = {
    FOOD: 'Еда',
    CLOTHING: 'Одежда',
    EDUCATION: 'Образование',
    ENTERTAINMENT: 'Развлечение',
    HOUSING: 'Жилье',
    TRANSPORTATION: 'Транспорт',
    HEALTHCARE: 'Здоровье',
    UTILITIES: 'Коммунальные услуги'
};

export const PURCHASE_CATEGORY_OPTIONS: TPurchaseCategoryOption[] = [
    { value: 'FOOD', label: 'Еда' },
    { value: 'CLOTHING', label: 'Одежда' },
    { value: 'EDUCATION', label: 'Образование' },
    { value: 'ENTERTAINMENT', label: 'Развлечение' },
    { value: 'HOUSING', label: 'Жилье' },
    { value: 'TRANSPORTATION', label: 'Транспорт' },
    { value: 'HEALTHCARE', label: 'Здоровье' },
    { value: 'UTILITIES', label: 'Коммунальные услуги' },
];