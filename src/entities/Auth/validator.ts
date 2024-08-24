import { tokensSchema } from "./schema";

export const tokensValidator = (data: unknown) => tokensSchema.parseAsync(data);