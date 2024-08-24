import { Auth } from "auth";
import { type TLoginData } from "entities";
import { makeAutoObservable } from "mobx";
import { type NavigateFunction } from "react-router-dom";
import { LoadingStore } from "stores";

export class LoginStore {
    loadingStore = new LoadingStore();

    navigate: NavigateFunction;

    constructor(navigate: NavigateFunction) {
        makeAutoObservable(this);

        this.navigate = navigate;
    }

    login = (data: TLoginData) =>
        this.loadingStore.byPromise(Auth.instance.login(data))
            .then(() => this.navigate('../'));

    goToRegistration = () => this.navigate('/registration');
}