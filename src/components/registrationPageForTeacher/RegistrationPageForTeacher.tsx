import React from "react";
import { NavLink } from "react-router-dom";
import { InjectedFormProps, reduxForm } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import { createField, Input } from "../inputs/inputs";

import "./RegistrationPageForTeacher.css";

const lengthMin = minLength(6);

const RegistrationTeacherForm: React.FC<InjectedFormProps<RegistrationFormValuesType>> = (props): React.ReactElement => {
    const { handleSubmit } = props;
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
                            {createField<LoginFormValuesTypeKeys>("name", Input, [], { type: "text" })}
                            <label>surname</label>
                            {createField<LoginFormValuesTypeKeys>("surname", Input, [], { type: "text" })}
                            <label>email</label>
                            <div>
                            {createField<LoginFormValuesTypeKeys>("email", Input, [requireEmail], { type: "text" })}
                            </div>
                            <label>password</label>
                            {createField<LoginFormValuesTypeKeys>("password", Input, [lengthMin], { type: "text" })}
                            <div className="teacher-checkbox">
                            {createField<LoginFormValuesTypeKeys>("rememberMe", Input, [], { type: "checkbox" })}
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const RegistrationTeacherReduxForm = reduxForm<RegistrationFormValuesType>({ form: "RegistrationTeacher" })(
    RegistrationTeacherForm
);

export type RegistrationFormValuesType = {
    name: string;
    surname: string;
    email: string;
    password: string;
    rememberMe: boolean;
}

export type LoginFormValuesTypeKeys = Extract<keyof RegistrationFormValuesType, string>


