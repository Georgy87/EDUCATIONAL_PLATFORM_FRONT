import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchLogin } from "../../store/ducks/user/actions";
import { AuthorizationBlock } from "../../hocs/AuthorizationBlock/AuthorizationBlock";
import { LoginFormSchema } from "../../utils/FormSchemas";

export type LoginSchemaType = typeof LoginFormSchema;

export type LoginProps = {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (data: LoginProps) => {
        const { email, password } = data;
        dispatch(fetchLogin({ email, password }));
        if (history.location.pathname === "/login") {
            history.push("/main");
        }
    };

    return (
        <div>
            <AuthorizationBlock onSubmit={onSubmit}
                formSchema={LoginFormSchema}
                inOrOut="Вход"
                pageName="login" />
            <div className="login-registrations">
                <span>У вас еще нет аккаунта?</span>
                <NavLink to="/registration">Зарегистрироваться</NavLink>
            </div>
        </div>
    );
};
