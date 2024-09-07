import { AuthorizedClient } from './AuthorizedClient';
import { RefreshClient } from './RefreshClient';
import { UnauthorizedClient } from './UnauthorizedClient';

class Clients {
    private static _unauthorized: UnauthorizedClient;

    static get unauthorized(): UnauthorizedClient {
        Clients._unauthorized = Clients._unauthorized || new UnauthorizedClient();

        return Clients._unauthorized;
    }

    private static _authorized: AuthorizedClient;

    static get authorized(): AuthorizedClient {
        Clients._authorized = Clients._authorized || new AuthorizedClient();

        return Clients._authorized;
    }

    private static _refresh: RefreshClient;

    static get refresh(): RefreshClient {
        Clients._refresh = Clients._refresh || new RefreshClient();

        return Clients._refresh;
    }
}

export const clients = Clients;