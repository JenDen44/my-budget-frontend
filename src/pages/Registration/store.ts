import { type NavigateFunction } from "react-router-dom";
import { type TRegistrationData } from "entities";
import { LoadingStore } from "stores";
import { makeAutoObservable } from 'mobx';
import { Auth } from "auth";

export class RegistrationStore {
    loadingStore = new LoadingStore();

    navigate: NavigateFunction;

    constructor(navigate: NavigateFunction) {
        makeAutoObservable(this);

        this.navigate = navigate;
    }

    registration = (data: TRegistrationData) =>
        this.loadingStore.byPromise(Auth.instance.registration(data))
            .then(() => this.navigate('../'));

    goToLogin = () => this.navigate('/login');
}