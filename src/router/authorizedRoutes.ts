import { redirect, type RouteObject } from 'react-router-dom';
import { Purchases } from 'pages';

export const authorizedRoutes: RouteObject[] = [
    {
        path: '/',
        children: [
            { index: true, loader: () => redirect('purchases') },
            { path: 'purchases', Component: Purchases },
            { path: '*', loader: () => redirect('/') },
        ]
    }
];
