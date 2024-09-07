import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { Auth } from 'auth';
import { Client } from './Client';

export class RefreshClient extends Client {
    constructor(config?: AxiosRequestConfig) {
        super(config);
        this.instance.interceptors.request.use(this.requestInterceptor);
    }

    private requestInterceptor = (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        return Auth.instance.getTokens()
            .then((tokens) => {
                config.headers.Authorization = `Bearer ${ tokens.refreshToken }`;

                return config;
            });
    };
}