import axios, { type AxiosRequestConfig,  type AxiosInstance, type AxiosPromise } from 'axios';

export class Client {
    private requests = new Map<string, AxiosPromise>();

    instance: AxiosInstance;

    constructor(config?: AxiosRequestConfig) {
        this.instance = axios.create({
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 3600000,
            ...config
        });
    }

    private getRequestName = (config: AxiosRequestConfig): string => {
        const { url, method, params, data, headers } = config;

        return `${url}_${method}_${JSON.stringify(params)}_${JSON.stringify(data)}_${JSON.stringify(headers)}`;
    };

    private request = <T>(config: AxiosRequestConfig, force = false): AxiosPromise<T> => {
        const requestName = this.getRequestName(config);
        const pendingRequest = this.requests.get(requestName);

        if (pendingRequest && !force) {
            return pendingRequest;
        }

        const request = this.instance.request<T>(config);

        this.requests.set(requestName, request);

        return request.finally((): void => {
            this.requests.delete(requestName);
        });
    };

    get = <T>(url: string, config: AxiosRequestConfig = {}, force = false): Promise<T> =>
        this.request<T>({ ...config, url, method: 'get' }, force)
            .then((result) => result.data);

    post = <T>(url: string, data?: unknown, config: AxiosRequestConfig = {}, force = false): Promise<T> =>
        this.request<T>({ ...config, url, data, method: 'post' }, force)
            .then((result) => result.data);

    put = <T>(url: string, data?: unknown, config: AxiosRequestConfig = {}, force = false): Promise<T> =>
        this.request<T>({ ...config, url, data, method: 'put' }, force)
            .then((result) => result.data);

    delete = <T>(url: string, config: AxiosRequestConfig = {}, force = false): Promise<T> =>
        this.request<T>({ ...config, url, method: 'delete' }, force)
            .then((result) => result.data);
}