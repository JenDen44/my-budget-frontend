import { makeAutoObservable } from 'mobx';

export class LoadingStore {
    loadingCount = 0;

    get isLoading() {
        return !!this.loadingCount;
    };

    constructor() {
        makeAutoObservable(this);
    }

    byPromise = <T,>(promise: Promise<T>) => {
        this.changeCount('add')

        return promise.finally(() => this.changeCount('subtract'));
    }

    changeCount = (type: 'add' | 'subtract') => {
        if (type === 'add') {
            this.loadingCount++;
        } else {
            this.loadingCount--;
        }
    }
}