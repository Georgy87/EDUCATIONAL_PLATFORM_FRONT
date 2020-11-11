import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./LoginPage.css";
import { login } from "../../actions/users";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <div className="login-wrapper">
                <div className="login">
                    <div className="login-inputs">
                        <h1>Войти</h1>
                        <label htmlFor="email">email</label>
                        <input
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="text"
                        />
                        <label htmlFor="password">password</label>
                        <input
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                        <NavLink to="/main">
                            <button
                                onClick={() => dispatch(login(email, password))}
                            >
                                Войти
                            </button>
                        </NavLink>
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
