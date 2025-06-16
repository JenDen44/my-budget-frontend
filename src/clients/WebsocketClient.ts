import { Auth } from 'auth';
import type { TTokens } from 'entities';
import type { TWebsocketSubscriber } from './types';
import { paths } from './paths';

export class WebsocketClient {
    private token?: string;
    private webSocket?: WebSocket;
    private subscribers: Set<TWebsocketSubscriber> = new Set();

    constructor() {
        Auth.instance.subscribe(this.setToken);
    }

    private setToken = (tokens?: TTokens): void => {
        const { accessToken: token } = tokens || {};

        if (this.token === token) {
            return;
        }

        this.token = token;

        if (this.webSocket) {
            setTimeout((): void => {
                this.webSocket?.close(1000);
            }, 1000);

            return;
        }

        if (this.token) {
            this.init(this.token);

            return;
        }

        this.clear();
    };

    private init = (token: string): void => {
        this.webSocket = new WebSocket(paths.WS_PATH);
        this.webSocket.onopen = (): void => {
            console.log('WEBSOKET OPEN');

            this.sendToken(token);
        };
        this.webSocket.onerror = (error): void => {
            console.log('WEBSOKET ERROR', error);
        };
        this.webSocket.onclose = (event: CloseEvent): void => {
            console.log('WEBSOKET CLOSE', event);
            const { code } = event;

            switch (code) {
            case 1000:
                if (this.token) {
                    this.init(this.token);
                }

                break;
            case 1003:
                this.clear();
            }
        };

        this.webSocket.onmessage = (event: MessageEvent): void => {
            console.log('WEBSOKET MESSAGE', event);

            this.subscribers.forEach((subscriber) => {
                try {
                    subscriber(event);
                } catch(error) {
                    console.error(error);
                }
            });
        };
    };

    private sendToken = (token: string): void => {
        try {
            this.webSocket?.send(token);
        } catch (error) {
            console.error(error);

            setTimeout((): void => {
                this.sendToken(token);
            }, 1000);
        }
    };

    private clear = (): void => {
        delete this.token;

        this.webSocket?.close();

        delete this.webSocket;
    };

    subscribe = (subscriber: TWebsocketSubscriber): void => {
        this.subscribers.add(subscriber);
    };

    unsubscribe = (subscriber: TWebsocketSubscriber): void => {
        this.subscribers.delete(subscriber);
    };
}
