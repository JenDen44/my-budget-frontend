import { z } from 'zod';

export const loginFormSchema = z.object({
    username: z.string().min(1, 'Введите логин'),
    password: z.string().min(1, 'Введите пароль')
});