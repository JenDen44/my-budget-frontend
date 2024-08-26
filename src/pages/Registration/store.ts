import { type TRegistrationData } from "entities";
import { LoadingStore } from "stores";
import { makeAutoObservable } from 'mobx';
import { Auth } from "auth";

export class RegistrationStore {
    loadingStore = new LoadingStore();

    constructor() {
        makeAutoObservable(this);
    }

    registration = (data: TRegistrationData) =>
        this.loadingStore.byPromise(Auth.instance.registration(data));
}