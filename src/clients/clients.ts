import { AuthorizedClient } from './AuthorizedClient';
import { RefreshClient } from './RefreshClient';
import { UnauthorizedClient } from './UnauthorizedClient';

class Clients {
    private static _unauthorized: UnauthorizedClient;

    static get unauthorized() {
        Clients._unauthorized = Clients._unauthorized || new UnauthorizedClient();

        return Clients._unauthorized.instance;
    }

    private static _authorized: AuthorizedClient;

    static get authorized() {
        Clients._authorized = Clients._authorized || new AuthorizedClient();

        return Clients._authorized.instance;
    }

    private static _refresh: RefreshClient;

    static get refresh() {
        Clients._refresh = Clients._refresh || new RefreshClient();

        return Clients._refresh.instance;
    }
}

export const clients = Clients;