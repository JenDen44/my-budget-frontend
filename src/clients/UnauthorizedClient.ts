import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Client } from './Client';

export class UnauthorizedClient extends Client {
    constructor(config?: AxiosRequestConfig) {
        super(config);
        this.instance.interceptors.response.use(undefined, this.responseInterceptor);
    }

    private responseInterceptor = (error?: AxiosError): Promise<AxiosResponse> => {
        if (!error?.response) {
            return Promise.reject(error);
        }

        return Promise.reject(error.response.data);
    };
}