export class AuthApi {
    login = (): Promise<unknown> => Promise.resolve({ accessToken: 'access_token', refreshToken: 'access_token' });

    registration = (): Promise<unknown> =>
        Promise.resolve({ accessToken: 'access_token', refreshToken: 'access_token' });

    refresh = (): Promise<unknown> => Promise.resolve({ accessToken: 'access_token', refreshToken: 'access_token' });
}