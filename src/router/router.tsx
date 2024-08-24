import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';
import { unauthorizedRoutes } from './unauthorizedRoutes';
import { useAuth } from 'auth';
import { authorizedRoutes } from './authorizedRoutes';

export const Router = () => {
    const isAuthorized = useAuth();
    const router = useMemo(() => {
        if (isAuthorized) {
            return createBrowserRouter(authorizedRoutes);
        }

        return createBrowserRouter(unauthorizedRoutes)
    }, [isAuthorized]);

    return <RouterProvider router={ router } />;
};