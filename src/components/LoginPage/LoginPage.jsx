import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import { InputForEmail, InputForPassword } from "../inputs/inputs";
import { login } from "../../actions/users";

import "./LoginPage.css";

const lengthMin = minLength(6);

const LoginForm = (props) => {
    const { handleSubmit} = props;
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
                            <div>
                                <Field
                                    name="email"
                                    component="input"
                                    validate={[requireEmail]}
                                    component={InputForEmail}
                                    type="text"
                                />
                            </div>
                            <label>password</label>
                            <div>
                                <Field
                                    name="password"
                                    component="input"
                                    validate={[lengthMin]}
                                    component={InputForPassword}
                                    type="text"
                                />
                            </div>
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

const LoginFormReduxForm = reduxForm({ form: "Login" })(
    LoginForm
);

const Login = (props) => {
    const dispatch = useDispatch();

    const submit = (data) => {
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
