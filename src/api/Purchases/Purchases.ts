import { clients } from 'clients';
import type { TNewPurchase, TPurchaseParams } from 'entities';
import { purchasesPaths } from './paths';

export class PurchasesApi {
    get = (params?: TPurchaseParams): Promise<unknown> => clients.authorized.get(purchasesPaths.purchases, { params });

    create = (data: TNewPurchase): Promise<unknown> => clients.authorized.post(purchasesPaths.purchases, data);

    getById = (id: number): Promise<unknown> => clients.authorized.get(purchasesPaths.getPurchaseById(id));

    edit = (id: number, data: TNewPurchase): Promise<unknown> =>
        clients.authorized.put(purchasesPaths.getPurchaseById(id), data);

    delete = (id: number): Promise<unknown> => clients.authorized.delete(purchasesPaths.getPurchaseById(id));
}