import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import type { Optional } from 'types';

export const useRouteMatch = (patterns: string[]): Optional<string> => {
    const { pathname } = useLocation();
    const currentPattern = useMemo(() => {
        for (const pattern of patterns) {
            const possibleMatch = matchPath(pattern, pathname);

            if (possibleMatch) {
                return possibleMatch.pattern.path;
            }
        }
    }, [ patterns, pathname ]);

    return currentPattern;
};