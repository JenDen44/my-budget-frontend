import type { TSubscribeFunction } from 'types';
import { api } from 'api';
import { Local, tokensValidator, type TLoginData, type TRegistrationData, type TTokens } from 'entities';
import { TOKENS } from './consts';

export class Auth {
    private static _instance?: Auth;

    static get instance(): Auth {
        this._instance = this._instance || new Auth();

        return this._instance;
    }

    private tokens?: TTokens;

    private subscribers = new Set<TSubscribeFunction<TTokens | undefined>>();

    private isTokens = (data: unknown): data is TTokens =>
        !!data &&
        typeof data === 'object' &&
        'accessToken' in data && typeof data.accessToken === 'string' &&
        'refreshToken' in data && typeof data.refreshToken === 'string';

    private isNewTokens = (tokens: TTokens): boolean => {
        return !this.tokens ||
            this.tokens.accessToken !== tokens.accessToken ||
            this.tokens.refreshToken !== tokens.refreshToken;
    };

    private getLocalTokens = (): Promise<TTokens> =>
        Local.tokens.getItem(TOKENS).then((data) => {
            if (this.isTokens(data)) {
                return data;
            }

            throw new Error('Не верный формат tokens');
        });

    private setTokens = (tokens: TTokens): Promise<TTokens> => {
        if (this.isNewTokens(tokens)) {
            this.tokens = tokens;

            this.subscribers.forEach(fn => fn(tokens));
        }

        return Local.tokens.setItem(TOKENS, tokens);
    };

    getTokens = (): Promise<TTokens> => {
        if (this.tokens) {
            return Promise.resolve(this.tokens);
        }

        return this.getLocalTokens()
            .then(this.setTokens);
    };

    login = (data: TLoginData): Promise<TTokens> => {
        return api.auth.login(data)
            .then(tokensValidator)
            .then(this.setTokens);
    };

    registration = (data: TRegistrationData): Promise<TTokens> => {
        return api.auth.registration(data)
            .then(tokensValidator)
            .then(this.setTokens);
    };

    refresh = (): Promise<TTokens> => {
        return api.auth.refresh()
            .then(tokensValidator)
            .then(this.setTokens);
    };

    logout = (): Promise<void> => {
        this.tokens = undefined;

        this.subscribers.forEach(fn => fn(undefined));

        return Local.tokens.removeItem(TOKENS);
    };

    subscribe = (fn: TSubscribeFunction<TTokens | undefined>): void => {
        this.getTokens().then(fn);
        this.subscribers.add(fn);
    };
}