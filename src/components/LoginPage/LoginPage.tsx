import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSubmitLoading } from "../../store/ducks/user/selectors";
import { Button, CircularProgress } from "@material-ui/core";
import { login } from "../../store/ducks/user/saga";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./LoginPage.css";

export interface LoginFormProps {
    email: string;
    password: string;
}

const RegisterFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),

});

export default function Registration() {
    const dispatch = useDispatch();
    const loading = useSelector(selectSubmitLoading);

    const { register, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    });

    const onSubmit = (data: LoginFormProps) => {
        const { email, password } = data;
        dispatch(login(email, password));
    };

    return (
        <div>
            <div className="login-container">
                <div className="login-background"></div>
                <div className="login">
                    <div className="login-wrapper">
                        <form className="login-inputs" onSubmit={handleSubmit(onSubmit)} >

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
                                        'Вход'
                                    )}
                            </Button>
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


