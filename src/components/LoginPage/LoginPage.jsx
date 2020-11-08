import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div>
            <div className="login-wrapper">
                <div className="login">
                    <div className="login-inputs">
                        <h1>Войти</h1>
                        <label htmlFor="name">name</label>
                        <input id="name" type="text" />
                        <label htmlFor="email">email</label>
                        <input id="email" type="text" />
                        <label htmlFor="password">password</label>
                        <input type="password" />
                        <button>Войти</button>
                    </div>
                </div>
                <div className="registration">
                    <span>Новый пользователь?</span>
                    <NavLink to="/registration">Зарегистрируйтесь</NavLink>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
