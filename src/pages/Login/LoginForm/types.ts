import type { z } from 'zod';
import type { loginFormSchema } from './schema';

export type TLoginFormValue = z.infer<typeof loginFormSchema>;