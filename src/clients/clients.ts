import { AuthorizedClient } from './AuthorizedClient';
import { RefreshClient } from './RefreshClient';
import { UnauthorizedClient } from './UnauthorizedClient';
import { WebsocketClient } from './WebsocketClient';

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

    private static _websocket: WebsocketClient;

    static get websocket(): WebsocketClient {
        Clients._websocket = Clients._websocket || new WebsocketClient();

        return Clients._websocket;
    }
}

export const clients = Clients;