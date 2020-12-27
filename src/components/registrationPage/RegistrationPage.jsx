import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import { registration } from "../../store/ducks/user/saga";
import { createField, Input } from "../inputs/inputs";

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
                            <label>surname</label>
                            <div>
                                <Field
                                    name="surname"
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
                                    component={Input}
                                    type="text"
                                />
                            </div>
                            <label>password</label>
                            <div>
                                <Field
                                    name="password"
                                    component="input"
                                    validate={[lengthMin]}
                                    component={Input}
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
        const { name, surname, email, password } = data;
        dispatch(registration(name, surname, email, password, false));
        dispatch(reset('Registration'));
    };
    return (
        <div>
            <RegistrationReduxForm onSubmit={submit} />
        </div>
    );
};

export default Registration;


