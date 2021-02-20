import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchRegistration } from "../../store/ducks/user/actions";
import { AuthorizationBlock } from "../../hocs/AuthorizationBlock/AuthorizationBlock";
import { RegisterFormSchema } from "../../utils/FormSchemas";

import "./RegistrationPage.scss";

export type RegistrationFormProps = {
    name?: string;
    surname?: string;
    email: string;
    password: string;
    teacher?: Boolean;
    // password2: string;
}

export type RegisterSchemaType = typeof RegisterFormSchema;

export default function Registration() {
    const dispatch = useDispatch();

    const onSubmit = (data: RegistrationFormProps) => {
        dispatch(fetchRegistration(data));
    };

    return (
        <div>
            <AuthorizationBlock onSubmit={onSubmit}
                inOrOut="Регистрация"
                formSchema={RegisterFormSchema}
                pageName="registration" >
                <div className="registration">
                    <span>У вас уже есть аккаунт?</span>
                    <NavLink to="/login">Войти</NavLink>
                </div>
            </AuthorizationBlock>
        </div>
    );
};





