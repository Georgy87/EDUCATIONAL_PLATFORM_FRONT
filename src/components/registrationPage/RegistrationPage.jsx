import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import { InputForEmail, InputForPassword } from "../inputs/inputs";
import { registration } from "../../actions/users";

import "./RegistrationPage.css";

const lengthMin = minLength(6);

const RegistrationForm = (props) => {
    const { handleSubmit, reset, isAuth, resetForm } = props;
    return (
        <div>
            <div className="registration-container">
                <div className="registration-background"></div>
                <div className="registration">
                    <div className="registration-wrapper">
                        <form
                            className="registration-inputs"
                            onSubmit={handleSubmit}
                        >
                            <h1>Зарегистрироваться</h1>
                            <label>name</label>
                            <div>
                                <Field
                                    name="name"
                                    component="input"
                                    type="text"
                                />
                            </div>
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
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="registration-registrations">
                        <span>У вас уже есть аккаунт?</span>
                        <NavLink to="/login">Войти</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RegistrationReduxForm = reduxForm({ form: "Registration" })(
    RegistrationForm
);

const Registration = (props) => {
    const dispatch = useDispatch();

    const submit = (data) => {
        const { name, email, password } = data;
        dispatch(registration(name, email, password));
        dispatch(reset('Registration'));
    };
    return (
        <div>
            <RegistrationReduxForm onSubmit={submit} />
        </div>
    );
};

export default Registration;


