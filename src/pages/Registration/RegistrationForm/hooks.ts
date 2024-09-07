import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { TRegistrationFormValue } from './types';
import { registrationFormSchema } from './schema';

export const useRegistrationForm = () => useForm<TRegistrationFormValue>({
    resolver: zodResolver(registrationFormSchema)
});

export const useRegistrationFormFields = () => {
    const usernameField = useController<TRegistrationFormValue>({ name: 'username', defaultValue: '' });
    const passwordField = useController<TRegistrationFormValue>({ name: 'password', defaultValue: '' });
    const confirmPasswordField = useController<TRegistrationFormValue>({ name: 'confirmPassword', defaultValue: '' });

    return {
        username: {
            value: usernameField.field.value,
            onChange: usernameField.field.onChange,
            error: !!usernameField.fieldState.error,
            helperText: usernameField.fieldState.error?.message,
            label: 'Логин'
        },
        password: {
            value: passwordField.field.value,
            onChange: passwordField.field.onChange,
            error: !!passwordField.fieldState.error,
            helperText: passwordField.fieldState.error?.message,
            label: 'Пароль'
        },
        confirmPassword: {
            value: confirmPasswordField.field.value,
            onChange: confirmPasswordField.field.onChange,
            error: !!confirmPasswordField.fieldState.error,
            helperText: confirmPasswordField.fieldState.error?.message,
            label: 'Повторите пароль'
        }
    };
};