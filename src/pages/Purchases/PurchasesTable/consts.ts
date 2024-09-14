import type { TPurchaseCell } from './types';

export const PURCHASE_COUNT_ON_PAGE = [ 10, 15, 20 ];

export const PURCHASE_CELLS: TPurchaseCell[] = [
    { key: 'purchaseDate', label: 'Дата' },
    { key: 'category', label: 'Категория' },
    { key: 'cost', label: 'Цена, ₽', align: 'right' },
    { key: 'quantity', label: 'Количество', align: 'right' },
    { key: 'totalCost', label: 'Стоимость, ₽', align: 'right' }
];