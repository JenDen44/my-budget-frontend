import { Box, TextField } from '@mui/material';
import type { ReactElement } from 'react';
import { PasswordField } from 'components';
import { useLoginFormFields } from './hooks';

export const LoginForm = (): ReactElement => {
    const fields = useLoginFormFields();

    return (
        <Box sx={ { display: 'flex', flexDirection: 'column', gap: 3 } }>
            <TextField { ...fields.username } />
            <PasswordField { ...fields.password } />
        </Box>
    );
};