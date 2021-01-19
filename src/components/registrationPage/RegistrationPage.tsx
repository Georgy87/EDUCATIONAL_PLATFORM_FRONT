import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSubmitLoading } from "../../store/ducks/user/selectors";
import { Button, CircularProgress } from "@material-ui/core";
import { fetchRegistration } from "../../store/ducks/user/actions";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./RegistrationPage.css";

export type RegisterFormProps = {
    name: string;
    surname: string;
    email: string;
    password: string;
    teacher: Boolean;
    // password2: string;
}

const RegisterFormSchema = yup.object().shape({
    name: yup.string().required('Введите свое имя'),
    surname: yup.string().required('Введите свою фамилию'),
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
    // password2: yup.string().oneOf([yup.ref('password'), null], 'Пароли не соответствуют'),
});

export default function Registration() {
    const dispatch = useDispatch();
    const loading = useSelector(selectSubmitLoading);

    const { register, handleSubmit, errors } = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    });

    const onSubmit = (data: RegisterFormProps) => {
        dispatch(fetchRegistration(data));
    };

    return (
        <div>
            <div className="registration-container">
                <div className="registration-background"></div>
                <div className="registration">
                    <div className="registration-wrapper">
                        <form className="registration-inputs" onSubmit={handleSubmit(onSubmit)} >
                            <label>name</label>
                            <input name="name" ref={register} type="text" />
                            <p>{errors.name?.message}</p>

                            <label>surname</label>
                            <input name="surname" ref={register} type="text" />
                            <p>{errors.surname?.message}</p>

                            <label>email</label>
                            <input name="email" ref={register} type="text" />
                            <p>{errors.email?.message}</p>

                            <label>password</label>
                            <input name="password" ref={register} type="text" />
                            <p>{errors.password?.message}</p>

                            <Button type="submit">
                                {loading ? (
                                    <CircularProgress color="inherit" size={16} />
                                ) : (
                                        'Регистрация'
                                    )}
                            </Button>
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





