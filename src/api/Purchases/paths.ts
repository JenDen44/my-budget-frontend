import { paths } from 'clients';

class PurchasesPaths {
    static purchases = `${paths.API_PATH}/purchases`;

    static getPurchaseById = (id: number): string => `${paths.API_PATH}/purchases/${id}`;
}

export const purchasesPaths = PurchasesPaths;