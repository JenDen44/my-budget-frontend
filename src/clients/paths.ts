class Paths {
    static get API_PATH(): string {
        return import.meta.env.DEV ? '/api' : import.meta.env.VITE_API_URL;
    }

    static get WS_PATH(): string {
        return import.meta.env.DEV ? '/websocket' : import.meta.env.VITE_WS_URL;
    }
}

export const paths = Paths;