import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import { LoginFormProps } from '../../components/loginPage/LoginPage';
import { selectSubmitLoading } from '../../store/ducks/user/selectors';
import { SchemaType } from "../../components/loginPage/LoginPage";
import { Button } from '../../components/button/Button';

import "./AuthorizationBlock.css";

type PropsType = {
    formSchema: SchemaType;
    onSubmit: (data: LoginFormProps) => void;
    pageName: string;
}

export const AuthorizationBlock: React.FC<PropsType> = ({ formSchema, onSubmit }) => {
    const loading = useSelector(selectSubmitLoading);

    const { register, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(formSchema)
    });

    return (
        <div className="login-container">
            <div className="login-background"></div>
            <div className="login">
                <div className="login-wrapper">
                    <form className="login-inputs" onSubmit={handleSubmit(onSubmit)}>
                        <label>email</label>
                        <input name="email" ref={register} type="text" />
                        <p>{errors.email?.message}</p>

                        <label>password</label>
                        <input name="password" ref={register} type="text" />
                        <p>{errors.password?.message}</p>

                        <Button type="submit" typeStyle="login-register">
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
    )
}
