import type { TSubscribeFunction } from "types";
import { api } from "api";
import { Local, tokensValidator, type TLoginData, type TRegistrationData, type TTokens } from "entities";
import { TOKENS } from "./consts";

export class Auth {
    private static _instance?: Auth;

    static get instance() {
        this._instance = this._instance || new Auth();

        return this._instance;
    }

    private tokens?: TTokens;

    private subscribers = new Set<TSubscribeFunction<TTokens>>()

    private isTokens = (data: unknown): data is TTokens =>
        !!data &&
        typeof data === 'object' &&
        'accessToken' in data && typeof data.accessToken === 'string' &&
        'refreshToken' in data && typeof data.refreshToken === 'string';

    private getLocalTokens = () =>
        Local.tokens.getItem(TOKENS).then((data) => {
            if (this.isTokens(data)) {
                return data;
            }

            throw new Error("Не верный формат tokens");
        });

    private setTokens = (tokens: TTokens) => {
        this.tokens = tokens;

        this.subscribers.forEach(fn => fn(tokens));

        return Local.tokens.setItem(TOKENS, tokens);
    }

    getTokens = () => {
        if (this.tokens) {
            return Promise.resolve(this.tokens);
        }

        return this.getLocalTokens()
            .then(this.setTokens);
    }

    login = (data: TLoginData) => {
        return api.auth.login(data)
            .then(tokensValidator)
            .then(this.setTokens)
    }

    registration = (data: TRegistrationData) => {
        return api.auth.registration(data)
            .then(tokensValidator)
            .then(this.setTokens)
    }

    refresh = () => {
        return api.auth.refresh()
            .then(tokensValidator)
            .then(this.setTokens);
    }

    logout = () => {
        this.tokens = undefined;

        return Local.tokens.removeItem(TOKENS);
    }

    subscribe = (fn: TSubscribeFunction<TTokens>) => {
        this.getTokens().then(fn);
        this.subscribers.add(fn);
    }
}