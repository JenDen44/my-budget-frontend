import { makeAutoObservable, reaction, type IReactionDisposer } from 'mobx';
import { api } from 'api';
import { purchasesValidator, type TNewPurchase, type TPurchase, type TPurchaseParams, type TPurchaseSortBy, type TSortDirection } from 'entities';
import { LoadingStore } from 'stores';
import { PURCHASE_COUNT_ON_PAGE } from './PurchasesTable';

export class PurchasesStore {
    loading = new LoadingStore();

    purchases: TPurchase[] = [];

    hasNextPage = false;

    page = 0;

    countOnPage = PURCHASE_COUNT_ON_PAGE[0];

    sortBy: TPurchaseSortBy = 'purchaseDate';

    sortDirection: TSortDirection = 'desc';

    get params(): TPurchaseParams {
        return {
            pageNo: this.page,
            pageSize: this.countOnPage,
            sortBy: this.sortBy,
            sortDir: this.sortDirection
        };
    }

    isOpenCreateModal = false;

    purchaseForEdit?: TPurchase = undefined;

    purchaseForDelete?: TPurchase = undefined;

    get isOpenEditModal(): boolean {
        return !!this.purchaseForEdit;
    }

    get isOpenDeleteModal(): boolean {
        return !!this.purchaseForDelete;
    }

    constructor() {
        makeAutoObservable(this);
    }

    mount = (): IReactionDisposer => {
        return reaction(
            () => this.params,
            () => this.loading.byPromise(this.load()),
            { fireImmediately: true }
        );
    };

    save = (purchases: TPurchase[]): void => {
        this.purchases = purchases;
        this.hasNextPage = this.purchases.length === this.countOnPage;
    };

    load = (): Promise<void> => api.purchases.get(this.params)
        .then(purchasesValidator)
        .then(this.save);

    create = (data: TNewPurchase): Promise<void> => api.purchases.create(data)
        .then(this.load);

    edit = (id: number, data: TNewPurchase): Promise<void> => api.purchases.edit(id, data)
        .then(this.load);

    delete = (id: number): Promise<void> => api.purchases.delete(id)
        .then(this.load);

    changePage = (page: number): void => {
        this.page = page;
    };

    changeCountOnPage = (countOnPage: number): void => {
        this.page = 0;
        this.countOnPage = countOnPage;
    };

    changeSort = (sortBy: TPurchaseSortBy): void => {
        if (this.sortBy === sortBy) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortBy = sortBy;
            this.sortDirection = 'desc';
        }
    };

    openCreateModal = (): void => {
        this.isOpenCreateModal = true;
    };

    closeCreateModal = (): void => {
        this.isOpenCreateModal = false;
    };

    openEditModal = (purchase: TPurchase): void => {
        this.purchaseForEdit = purchase;
    };

    closeEditModal = (): void => {
        this.purchaseForEdit = undefined;
    };

    openDeleteModal = (purchase: TPurchase): void => {
        this.purchaseForDelete = purchase;
    };

    closeDeleteModal = (): void => {
        this.purchaseForDelete = undefined;
    };
}