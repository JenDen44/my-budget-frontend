import { z } from "zod";

export const tokensSchema = z.object({
    access_token: z.string(),
    refresh_token: z.string()
}).transform((data) => {
    const { access_token: accessToken, refresh_token: refreshToken } = data;

    return { accessToken, refreshToken };
});