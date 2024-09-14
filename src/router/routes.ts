import { redirect, type RouteObject } from 'react-router-dom';
import { Main, Purchases, Logout, Login, Registration, Reports, ReportsByDate, ReportsByCategory } from 'pages';

export const routes: RouteObject[] = [
    { path: '/login', Component: Login },
    { path: '/registration', Component: Registration },
    {
        path: '/',
        Component: Main,
        children: [
            { index: true, loader: () => redirect('purchases') },
            { path: 'purchases', Component: Purchases },
            {
                path: 'reports',
                Component: Reports,
                children: [
                    { index: true, loader: () => redirect('by-date') },
                    { path: 'by-date', Component: ReportsByDate },
                    { path: 'by-category', Component: ReportsByCategory },
                ]
            },
            { path: 'logout', Component: Logout },
            { path: '*', loader: () => redirect('/') }
        ]
    }
];
