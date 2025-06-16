import { paths } from 'clients';

class AuthPaths {
    static login = `${paths.API_PATH}/login`;

    static registration = `${paths.API_PATH}/register`;

    static refresh = `${paths.API_PATH}/refresh`;
}

export const authPaths = AuthPaths;