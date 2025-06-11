import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';
import { clients } from 'clients';
import { routes } from './routes';

export const Router = () => {
    const router = useMemo(() => createBrowserRouter(routes), []);

    console.log(clients.websocket);

    return <RouterProvider router={ router } />;
};