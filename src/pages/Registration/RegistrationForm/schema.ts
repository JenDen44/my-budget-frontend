import { z } from 'zod';

export const registrationFormSchema = z.object({
    username: z.string().min(1, 'Введите логин'),
    password: z.string().min(1, 'Введите пароль'),
    confirmPassword:  z.string().min(1, 'Введите пароль'),
}).superRefine((value, ctx) => {
    const { password, confirmPassword } = value;

    if (password !== confirmPassword) {
        ctx.addIssue({
            path: ['confirmPassword'],
            code: z.ZodIssueCode.custom,
            message: 'Пароли должны совпадать'
        })
    }
});