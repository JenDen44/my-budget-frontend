import { observer, useLocalObservable } from "mobx-react";
import type { TAuthProviderProps } from "./types";
import { AuthProviderStore } from "./store";
import { authContext} from './context';
import { WithLoading } from "components";

export const AuthProvider = observer((props: TAuthProviderProps) => {
    const { children } = props;
    const store = useLocalObservable(() => new AuthProviderStore());

    return (
        <authContext.Provider value={store.isAuthorized}>
            <WithLoading isLoading={store.loading.isLoading}>
                {children}
            </WithLoading>
        </authContext.Provider>
    );
});