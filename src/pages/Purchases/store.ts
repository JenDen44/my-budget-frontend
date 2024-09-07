import { makeAutoObservable } from 'mobx';
import { api } from 'api';
import { purchasesValidator, type TNewPurchase, type TPurchase } from 'entities';
import { LoadingStore } from 'stores';

export class PurchasesStore {
    loading = new LoadingStore();

    purchases: TPurchase[] = [];

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

        this.loading.byPromise(this.load());
    }

    save = (purchases: TPurchase[]): void => {
        this.purchases = purchases;
    };

    load = (): Promise<void> => api.purchases.get()
        .then(purchasesValidator)
        .then(this.save);

    create = (data: TNewPurchase): Promise<void> => api.purchases.create(data)
        .then(this.load);

    edit = (id: number, data: TNewPurchase): Promise<void> => api.purchases.edit(id, data)
        .then(this.load);

    delete = (id: number): Promise<void> => api.purchases.delete(id)
        .then(this.load);

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