import { observer, useLocalObservable } from 'mobx-react';
import { WithLoading } from 'components';
import type { TAuthProviderProps } from './types';
import { AuthProviderStore } from './store';
import { authContext } from './context';

export const AuthProvider = observer((props: TAuthProviderProps) => {
    const { children } = props;
    const store = useLocalObservable(() => new AuthProviderStore());

    return (
        <authContext.Provider value={ store.isAuthorized }>
            <WithLoading isLoading={ !store.loading.isFinishedOnce || store.loading.isLoading }>
                {children}
            </WithLoading>
        </authContext.Provider>
    );
});