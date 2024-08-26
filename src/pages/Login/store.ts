import { Auth } from "auth";
import { type TLoginData } from "entities";
import { makeAutoObservable } from "mobx";
import { LoadingStore } from "stores";

export class LoginStore {
    loadingStore = new LoadingStore();

    constructor() {
        makeAutoObservable(this);
    }

    login = (data: TLoginData) =>
        this.loadingStore.byPromise(Auth.instance.login(data));
}