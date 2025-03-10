import { useController, useForm, type UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { TLoginFormValue } from './types';
import { loginFormSchema } from './schema';

export const useLoginForm = (): UseFormReturn<TLoginFormValue> => useForm<TLoginFormValue>({
    resolver: zodResolver(loginFormSchema)
});

export const useLoginFormFields = () => {
    const usernameField = useController<TLoginFormValue>({ name: 'username', defaultValue: '' });
    const passwordField = useController<TLoginFormValue>({ name: 'password', defaultValue: '' });

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
        }
    };
};