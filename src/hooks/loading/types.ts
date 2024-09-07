export type TUseLoading = {
    isLoading: boolean;
    isFirstLoading: boolean;
    byPromise: <T>(promise: Promise<T>) => Promise<T>;
}