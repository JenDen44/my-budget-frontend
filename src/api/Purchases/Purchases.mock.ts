import type { TNewPurchase } from 'entities';

let purchases = [
    { id: 1, purchaseDate: '2024-08-31', category: 'FOOD', cost: 31.2, quantity: 1, totalCost: 31.2 },
    { id: 2, purchaseDate: '2024-08-30', category: 'FOOD', cost: 31.2, quantity: 1, totalCost: 31.2 },
    { id: 3, purchaseDate: '2024-06-14', category: 'FOOD', cost: 31.2, quantity: 1, totalCost: 31.2 },
    { id: 4, purchaseDate: '2022-06-14', category: 'FOOD', cost: 31.2, quantity: 1, totalCost: 31.2 },
];

export class PurchasesApi {
    get = (): Promise<unknown> => Promise.resolve(purchases);

    create = (data: TNewPurchase): Promise<unknown> => {
        const purchase = {
            id: purchases[purchases.length - 1]?.id || 1,
            totalCost: data.cost * data.quantity,
            ...data
        };

        purchases.push(purchase);

        return Promise.resolve(purchase);
    };

    getById = (id: number): Promise<unknown> => {
        const purchase = purchases.find((item) => item.id === id);

        if (purchase) return Promise.resolve(purchase);

        return Promise.reject();
    };

    edit = (id: number, data: TNewPurchase): Promise<unknown> => {
        const index = purchases.findIndex((item) => item.id === id);

        if (index === -1) {
            return Promise.reject();
        }

        const purchase = {
            id,
            totalCost: data.cost * data.quantity,
            ...data
        };

        purchases[index] = purchase;

        return Promise.resolve(purchase);
    };

    delete = (id: number): Promise<unknown> => {
        purchases = purchases.filter((item) => item.id !== id);

        return Promise.resolve();
    };
}