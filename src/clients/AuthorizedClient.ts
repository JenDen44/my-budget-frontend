import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { Auth } from 'auth';
import { Client } from './Client';

export class AuthorizedClient extends Client {
    constructor(config?: AxiosRequestConfig) {
        super(config);
        this.instance.interceptors.request.use(this.requestInterceptor);
        this.instance.interceptors.response.use(undefined, this.responseInterceptor);
    }

    private requestInterceptor = (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        return Auth.instance.getTokens()
            .then((tokens) => {
                config.headers.Authorization = `Bearer ${ tokens.accessToken }`;

                return config;
            })
    }

    private responseInterceptor = (error?: AxiosError): Promise<AxiosResponse> => {
        if (!error?.response) {
            return Promise.reject(error);
        }


        const { status, config } = error.response;

        switch (status) {
            case 401:
                return Auth.instance.refresh()
                    .then(() => this.instance(config));
            default:
                return Promise.reject(error);
        }
    }
}