import { Auth } from "auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Auth.instance.logout().then(() => navigate('/login'));
    });

    return null;
}