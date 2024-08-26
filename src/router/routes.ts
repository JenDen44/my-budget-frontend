import { redirect, type RouteObject } from 'react-router-dom';
import { Main, Purchases, Logout, Login, Registration } from 'pages';

export const routes: RouteObject[] = [
    { path: '/login', Component: Login },
    { path: '/registration', Component: Registration },
    {
        path: '/',
        Component: Main,
        children: [
            { index: true, loader: () => redirect('purchases') },
            { path: 'purchases', Component: Purchases },
            { path: 'logout', Component: Logout },
            { path: '*', loader: () => redirect('/') }
        ]
    }
];
