import { observer, useLocalObservable } from "mobx-react";
import { LoginForm, useLoginForm } from "./LoginForm";
import { LoginStore } from "./store";
import { FormProvider } from "react-hook-form";
import { Box, Link, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

export const Login = observer(() => {
    const navigate = useNavigate();
    const store = useLocalObservable(() => new LoginStore(navigate));
    const form = useLoginForm();
    const onSubmit = form.handleSubmit(store.login);

    return (
    <FormProvider {...form}>
        <Box
            sx={{
                width: '100dvw',
                height: '100dvh',
                overflow: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2
            }}
        >
            <Box
                component="form"
                onSubmit={onSubmit}
                sx={{
                    width: '100%',
                    maxWidth: 480,
                    border: '1px solid',
                    borderRadius: 4,
                    px: 4,
                    py: 6,
                }}
            >
                <Typography variant="h3" sx={{ mb: 4 }}>Войти</Typography>
                <LoginForm />
                <LoadingButton
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ mt: 6 }}
                    loading={store.loadingStore.isLoading}
                >
                    Войти
                </LoadingButton>
                <Box sx={{ display: 'flex', justifyContent: 'end', mt: 1 }}>
                    <Link
                        component="button"
                        type="button"
                        variant="body2"
                        underline="hover"
                        onClick={store.goToRegistration}
                    >
                        Зарегистрироваться
                    </Link>
                </Box>
            </Box>
        </Box>
    </FormProvider>
    );
});