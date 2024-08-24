import localforage from "localforage";

export class Local {
    private static _tokens?: LocalForage;

    static get tokens() {
        Local._tokens = Local._tokens || localforage.createInstance({ name: 'tokens' });

        return Local._tokens;
    }
}