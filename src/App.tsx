
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from 'auth';
import { Router } from 'router';

export const App = () => {
    return (
        <AuthProvider>
            <CssBaseline />
            <Router />
        </AuthProvider>
    );
}
