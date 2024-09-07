import { useCallback, useMemo, useState } from 'react';
import type { TUseLoading } from './types';

export const useLoading = (): TUseLoading => {
    const [ loadingCount, setLoadingCount ] = useState(0);
    const [ isFinishedOnce, setFinishedOnce ] = useState(false);
    const isLoading = useMemo(() => !!loadingCount, [ loadingCount ]);
    const isFirstLoading = useMemo(() => !isFinishedOnce && isLoading, [ isFinishedOnce, isLoading ]);
    const byPromise = useCallback(<T>(promise: Promise<T>): Promise<T> => {
        setLoadingCount((oldLoadingCount) => oldLoadingCount + 1);

        return promise.finally(() => {
            setFinishedOnce(false);
            setLoadingCount((oldLoadingCount) => oldLoadingCount - 1);
        });
    }, []);

    return { isLoading, isFirstLoading, byPromise };
};