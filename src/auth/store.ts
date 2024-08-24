import type { TTokens } from "entities";
import { Auth } from "./Auth";
import { makeAutoObservable } from "mobx";
import { LoadingStore } from "stores";

export class AuthProviderStore {
    tokens?: TTokens = undefined;

    loading = new LoadingStore();

    get isAuthorized() {
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