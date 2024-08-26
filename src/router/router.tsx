import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';
import { routes } from './routes';

export const Router = () => {
    const router = useMemo(() => createBrowserRouter(routes), []);

    return <RouterProvider router={ router } />;
};