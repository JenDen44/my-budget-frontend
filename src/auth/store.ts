import { makeAutoObservable } from 'mobx';
import type { TTokens } from 'entities';
import { LoadingStore } from 'stores';
import { Auth } from './Auth';

export class AuthProviderStore {
    tokens?: TTokens = undefined;

    loading = new LoadingStore();

    get isAuthorized(): boolean {
        return !!this.tokens;
    }

    constructor() {
        makeAutoObservable(this);

        this.loading.byPromise(Auth.instance.getTokens()).then(this.setTokens);
        Auth.instance.subscribe(this.setTokens);

    }

    setTokens = (tokens?: TTokens): void => {
        this.tokens = tokens;
    };
}