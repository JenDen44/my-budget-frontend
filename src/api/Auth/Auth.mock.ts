import type { TLoginData, TRegistrationData } from 'entities';

export class AuthApi {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login = (data: TLoginData): Promise<unknown> => Promise.resolve({ access_token: 'access_token', refresh_token: 'access_token' });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    registration = (data: TRegistrationData): Promise<unknown> =>
        Promise.resolve({ access_token: 'access_token', refresh_token: 'access_token' });

    refresh = (): Promise<unknown> => Promise.resolve({ access_token: 'access_token', refresh_token: 'access_token' });
}