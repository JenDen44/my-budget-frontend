import { Box, TextField } from "@mui/material";
import { useLoginFormFields } from "./hooks"
import { PasswordField } from "components";

export const LoginForm = () => {
    const fields = useLoginFormFields();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField {...fields.username} />
            <PasswordField {...fields.password} />
        </Box>
    )
}