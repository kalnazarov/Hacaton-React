import React from "react";
import Auth from "../../components/Auth/Auth";
import { useAuth } from "../../components/context/AuthContextProvaider";
import HomePage from "../../components/homePage/HomePage";

const AuthPage = () => {
    const {
        user: { email },
    } = useAuth();
    return <div>{<Auth />}</div>;
};

export default AuthPage;
