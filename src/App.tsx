
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import type { ReactElement } from 'react';
import { AuthProvider } from 'auth';
import { Router } from 'router';

export const App = (): ReactElement => {
    return (
        <LocalizationProvider dateAdapter={ AdapterDateFns }>
            <Box sx={ {
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                width: '100dvw',
                height: '100dvh',
                bgcolor: 'background.default'
            } }
            >
                <CssBaseline />
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </Box>
        </LocalizationProvider>
    );
};
