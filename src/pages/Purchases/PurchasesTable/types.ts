import type { TPurchase, TPurchaseSortBy, TSortDirection } from 'entities';

export type TPurchasesTableProps = {
    purchases: TPurchase[];
    hasNextPage: boolean;
    page: number;
    countOnPage: number;
    sortBy: TPurchaseSortBy;
    sortDirection: TSortDirection;
    onChangePage: (page: number) => void;
    onChangeCountOnPage: (countOnPage: number) => void;
    onEdit: (purchase: TPurchase) => void;
    onDelete: (purchase: TPurchase) => void;
    onChangeSort: (sortBy: TPurchaseSortBy) => void;
}

export type TPurchaseCell = {
    key: TPurchaseSortBy,
    label: string,
    align?: 'right'
}