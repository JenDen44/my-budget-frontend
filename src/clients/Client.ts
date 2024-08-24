import axios, { type AxiosRequestConfig,  type AxiosInstance } from 'axios';

export class Client {
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
}