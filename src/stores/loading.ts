import { makeAutoObservable } from 'mobx';

export class LoadingStore {
    loadingCount = 0;

    isFinishedOnce = false;

    get isLoading(): boolean {
        return !!this.loadingCount;
    }

    get isFirstLoading(): boolean {
        return !this.isFinishedOnce && !!this.isLoading;
    }

    constructor() {
        makeAutoObservable(this);
    }

    byPromise = <T,>(promise: Promise<T>): Promise<T> => {
        this.loadingCount++;

        return promise.finally(this.onFinally);
    };

    onFinally = (): void => {
        this.isFinishedOnce = true;
        this.loadingCount--;
    };
}