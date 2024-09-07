import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'auth';

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Auth.instance.logout().then(() => navigate('/login'));
    });

    return null;
};