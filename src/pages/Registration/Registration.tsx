import { observer, useLocalObservable } from 'mobx-react';
import { FormProvider } from 'react-hook-form';
import { Box, Link, Paper, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from 'auth';
import { RegistrationStore } from './store';
import { RegistrationForm, useRegistrationForm } from './RegistrationForm';

export const Registration = observer(() => {
    const store = useLocalObservable(() => new RegistrationStore());
    const form = useRegistrationForm();
    const onSubmit = form.handleSubmit((data) => store.registration({ username: data.username, password: data.password }));
    const isAuthorized = useAuth();

    if (isAuthorized) {
        return <Navigate to="/" />;
    }

    return (
        <FormProvider { ...form }>
            <Box
                sx={ {
                    width: '100dvw',
                    height: '100dvh',
                    overflow: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                } }
            >
                <Paper
                    component="form"
                    onSubmit={ onSubmit }
                    sx={ {
                        width: '100%',
                        maxWidth: 480,
                        border: '1px solid',
                        borderRadius: 4,
                        px: 4,
                        py: 6,
                    } }
                >
                    <Typography variant="h3" sx={ { mb: 4 } }>Регистрация</Typography>
                    <RegistrationForm />
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={ { mt: 6 } }
                        loading={ store.loadingStore.isLoading }
                    >
                        Регистрация
                    </LoadingButton>
                    <Box sx={ { display: 'flex', justifyContent: 'end', mt: 1 } }>
                        <Link
                            component={ RouterLink }
                            variant="body2"
                            underline="hover"
                            to="/login"
                        >
                            Авторизоваться
                        </Link>
                    </Box>
                </Paper>
            </Box>
        </FormProvider>
    );
});