import type { z } from "zod";
import type { registrationFormSchema } from "./schema";

export type TRegistrationFormValue = z.infer<typeof registrationFormSchema>;