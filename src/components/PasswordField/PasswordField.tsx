import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState, type ReactElement } from 'react';
import type { TPasswordFieldProps } from './types';

export const PasswordField = (props: TPasswordFieldProps): ReactElement => {
    const [ isShowPassword, setShowPassword ] = useState(false);
    const onClick = (): void => setShowPassword((oldValue) => !oldValue);

    return (
        <TextField
            { ...props }
            type={ isShowPassword ? 'text' : 'password' }
            InputProps={ {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={ onClick }>
                            {isShowPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )
            } }
        />
    );
};