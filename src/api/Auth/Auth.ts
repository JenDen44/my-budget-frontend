import { clients } from 'clients';
import type { TLoginData, TRegistrationData } from 'entities';
import { authPaths } from './paths';

export class AuthApi {
    login = (data: TLoginData) => {
        return clients.unauthorized.post(authPaths.login, data)
            .then((res) => res.data);
    };

    registration = (data: TRegistrationData) => {
        return clients.unauthorized.post(authPaths.registration, data)
            .then((res) => res.data);
    };

    refresh = () => {
        return clients.refresh.get(authPaths.refresh)
            .then((res) => res.data);
    };
}