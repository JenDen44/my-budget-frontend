class PurchasesPaths {
    static purchases = '/api/purchases';

    static getPurchaseById = (id: number): string => `/api/purchases/${id}`;
}

export const purchasesPaths = PurchasesPaths;