import { AuthApi } from './Auth';

class Api {
    private static _auth: AuthApi;

    static get auth() {
        Api._auth = Api._auth || new AuthApi();

        return Api._auth;
    }

}

export const api = Api;