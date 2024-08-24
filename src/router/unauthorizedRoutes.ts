import { redirect, type RouteObject } from 'react-router-dom';
import { Login, Registration } from 'pages';

export const unauthorizedRoutes: RouteObject[] = [
    {
        path: '/',
        children: [
            { index: true, loader: () => redirect('login') },
            { path: 'login', Component: Login },
            { path: 'registration', Component: Registration },
            { path: '*', loader: () => redirect('/') },
        ]
    }
];
