import { clients } from 'clients';
import type { TLoginData, TRegistrationData } from 'entities';
import { authPaths } from './paths';

export class AuthApi {
    login = (data: TLoginData): Promise<unknown> => clients.unauthorized.post(authPaths.login, data);

    registration = (data: TRegistrationData): Promise<unknown> =>
        clients.unauthorized.post(authPaths.registration, data);

    refresh = (): Promise<unknown> => clients.refresh.get(authPaths.refresh);
}