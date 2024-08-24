import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react";
import type { TPasswordFieldProps } from "./types";

export const PasswordField = (props: TPasswordFieldProps) => {
    const [isShowPassword, setShowPassword] = useState(false);
    const onClick = () => setShowPassword((oldValue) => !oldValue);

    return (
        <TextField
            {...props}
            type={isShowPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={onClick}>
                            {isShowPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
}