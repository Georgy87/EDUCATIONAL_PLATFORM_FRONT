import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import { InputForEmail, InputForPassword } from "../inputs/inputs";
import { registration } from "../../store/ducks/user/saga";

import "./RegistrationPageForTeacher.css";

const lengthMin = minLength(6);

const RegistrationTeacherForm = (props) => {
    const { handleSubmit, reset, isAuth, resetForm } = props;
    return (
        <div>
            <div className="teacher-registration-container">
                <NavLink to="/main">
                    <span className="teacher-back">Платформа</span>
                </NavLink>
                <div className="teacher-registration-background"></div>
                <div className="teacher-registration">
                    <div className="teacher-registration-wrapper">
                        <form
                            className="teacher-registration-inputs"
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
                            <label>competence</label>
                            <div>
                                <Field
                                    name="competence"
                                    component="input"
                                    type="text"
                                />
                            </div>
                            <div className="teacher-checkbox">
                                <Field
                                    name="rememberMe"
                                    component="input"
                                    type="checkbox"
                                />
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RegistrationTeacherReduxForm = reduxForm({ form: "RegistrationTeacher" })(
    RegistrationTeacherForm
);

const RegistrationTeacher = (props) => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.user.isAuth);

    const submit = (data) => {
        const { name, surname, email, password, rememberMe} = data;
        dispatch(
            registration(name, surname, email, password, rememberMe)
        );
        dispatch(reset("RegistrationTeacher"));
    };
    return (
        <div>
            <RegistrationTeacherReduxForm onSubmit={submit} />
        </div>
    );
};

export default RegistrationTeacher;
