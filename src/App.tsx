
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from 'auth';
import { Router } from 'router';

export const App = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            width: '100dvw',
            height: '100dvh',
            bgcolor: 'background.default'
        }}>
            <AuthProvider>
                <CssBaseline />
                <Router />
            </AuthProvider>
        </Box>
    );
}
