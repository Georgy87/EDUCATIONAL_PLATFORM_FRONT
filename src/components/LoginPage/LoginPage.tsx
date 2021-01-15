import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { InjectedFormProps, reduxForm, reset } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import { createField, Input } from "../inputs/inputs";
import { login } from "../../store/ducks/user/saga";

import "./LoginPage.css";

const lengthMin = minLength(6);

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = (props): React.ReactElement => {
    const { handleSubmit } = props;
    return (
        <div>
            <div className="login-container">
                <div className="login-background"></div>
                <div className="login">
                    <div className="login-wrapper">
                        <form
                            className="login-inputs"
                            onSubmit={handleSubmit}
                        >
                            <h1>Войти</h1>
                            <label>email</label>
                            {createField<LoginFormValuesTypeKeys>("email", Input, [requireEmail], { type: "text" })}
                            <label>password</label>
                            {createField<LoginFormValuesTypeKeys>("password", Input, [lengthMin], { type: "text" })}
                            {/* <NavLink to="/main"> */}
                            <button type="submit" >Submit</button>
                            {/* </NavLink> */}
                        </form>
                    </div>
                    <div className="login-registrations">
                        <span>У вас еще нет аккаунта?</span>
                        <NavLink to="/registration">Зарегистрироваться</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LoginFormReduxForm = reduxForm<LoginFormValuesType>({ form: "Login" })(
    LoginForm
);

type LoginFormValuesType = {
    email: string;
    password: string;
}

export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login = () => {
    const dispatch = useDispatch();

    const submit = (data: LoginFormValuesType) => {
        const { email, password } = data;
        dispatch(login(email, password));
        dispatch(reset('Login'));
    };
    return (
        <div>
            <LoginFormReduxForm onSubmit={submit} />
        </div>
    );
};

export default Login;
