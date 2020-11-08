import React from "react";
import { NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
               <div className="login-wrapper">
                <div className="login">
                    <div className="login-inputs">
                        <h1>Зарегистрироваться</h1>
                        <label htmlFor="name">name</label>
                        <input id="name" type="text" />
                        <label htmlFor="email">email</label>
                        <input id="email" type="text" />
                        <label htmlFor="password">password</label>
                        <input type="password" />
                        <button>Зарегистрироваться</button>
                    </div>
                </div>
                <div className="registration">
                    <span>У вас уже есть аккаунт?</span>
                    <NavLink to="/login">Войти</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Registration;
