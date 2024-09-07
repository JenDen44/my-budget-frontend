import { Box, TextField } from '@mui/material';
import { PasswordField } from 'components';
import { useRegistrationFormFields } from './hooks';

export const RegistrationForm = () => {
    const fields = useRegistrationFormFields();

    return (
        <Box sx={ { display: 'flex', flexDirection: 'column', gap: 3 } }>
            <TextField { ...fields.username } />
            <PasswordField { ...fields.password } />
            <PasswordField { ...fields.confirmPassword } />
        </Box>
    );
};