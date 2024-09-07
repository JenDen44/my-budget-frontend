import { Container } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'auth';
import { Header } from './Header';

export const Main = () => {
    const isAuthorized = useAuth();

    if (!isAuthorized) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Header />
            <Container maxWidth="xl" sx={ { display: 'flex', flexDirection: 'column', flexGrow: 1, py: 2 } }>
                <Outlet />
            </Container>
        </>
    );
};