import type { z } from "zod";
import type { tokensSchema } from "./schema";

export type TLoginData = {
    username: string;
    password: string;
}

export type TRegistrationData = {
    username: string;
    password: string;
}

export type TTokens = z.infer<typeof tokensSchema>;