import { Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useAuth } from "auth";

export const Main = () => {
    const isAuthorized = useAuth();

    if (!isAuthorized) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Outlet />
            </Container>
        </>
    );
}