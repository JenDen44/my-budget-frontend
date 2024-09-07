import { AuthApi } from './Auth';
import { PurchasesApi } from './Purchases';
import { ReportsApi } from './Reports';

class Api {
    private static _auth: AuthApi;

    static get auth(): AuthApi {
        Api._auth = Api._auth || new AuthApi();

        return Api._auth;
    }

    private static _purchases: PurchasesApi;

    static get purchases(): PurchasesApi {
        Api._purchases = Api._purchases || new PurchasesApi();

        return Api._purchases;
    }

    private static _reports: ReportsApi;

    static get reports(): ReportsApi {
        Api._reports = Api._reports || new ReportsApi();

        return Api._reports;
    }
}

export const api = Api;