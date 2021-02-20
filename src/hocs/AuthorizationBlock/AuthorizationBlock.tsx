import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import { selectSubmitLoading } from '../../store/ducks/user/selectors';
import { LoginProps, LoginSchemaType } from "../../components/loginPage/LoginPage";
import { RegisterSchemaType } from "../../components/registrationPage/RegistrationPage";
import { Button } from '../../components/button/Button';

import "./AuthorizationBlock.scss";
import { CheckEmailInfo } from '../../components/checkEmailInfo/CheckEmailInfo';

export type FormProps = {
    name?: string;
    surname?: string;
    email: string;
    password: string;
    teacher?: Boolean;
    // password2: string;
}

type PropsType = {
    formSchema: LoginSchemaType | RegisterSchemaType;
    onSubmit: ((data: FormProps) => void) | ((data: LoginProps) => void);
    pageName: string;
    inOrOut: string;
}

export const AuthorizationBlock: React.FC<PropsType> = ({ onSubmit, pageName, formSchema, inOrOut, children }) => {
    const loading = useSelector(selectSubmitLoading);

    const { register, handleSubmit, errors } = useForm<FormProps>({
        resolver: yupResolver(formSchema)
    });

    return (
        <div className="authorization">
            <div className="authorization__background"></div>
            <div className="authorization__container">
                <div className="authorization__container-form">
                    <form className="login-inputs" onSubmit={handleSubmit(onSubmit)}>
                        {pageName === "registration" &&
                            <>
                                <label>name</label>
                                <input name="name" ref={register} type="text" />
                                <p>{errors.name?.message}</p>

                                <label>surname</label>
                                <input name="surname" ref={register} type="text" />
                                <p>{errors.surname?.message}</p>
                            </>
                        }
                        <label>email</label>
                        <input name="email" ref={register} type="text" />
                        <p>{errors.email?.message}</p>

                        <label>password</label>
                        <input name="password" ref={register} type="password" />
                        <p>{errors.password?.message}</p>

                        <Button type="submit" typeStyle="login-register">
                            {loading ? (
                                <CircularProgress color="inherit" size={16} />
                            ) : (
                                    <div>{inOrOut}</div>
                                )}
                        </Button>
                    </form>
                </div>
                {children}
            </div>
        </div>
    )
}
