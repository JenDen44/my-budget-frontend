import { observer, useLocalObservable } from "mobx-react";
import type { TAuthProviderProps } from "./types";
import { AuthProviderStore } from "./store";
import { authContext} from './context';

export const AuthProvider = observer((props: TAuthProviderProps) => {
    const { children } = props;
    const store = useLocalObservable(() => new AuthProviderStore());

    if (store.loading.isLoading) {
        return 'Loading...'
    }

    return (
        <authContext.Provider value={store.isAuthorized}>
            {children}
        </authContext.Provider>
    );
});