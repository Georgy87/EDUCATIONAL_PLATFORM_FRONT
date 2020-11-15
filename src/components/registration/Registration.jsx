import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { registration } from "../../actions/users";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div className="login-container">
                <div className="login-background"></div>
                <div className="login">
                    <div className="login-wrapper">
                        <div className="login-inputs">
                            <h1>Зарегистрироваться</h1>
                            <label htmlFor="name">name</label>
                            <input
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                type="text"
                            />
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
                            <button
                                onClick={() =>
                                    registration(name, email, password)
                                }
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                    {/* <div className="registration">
                        <span>У вас уже есть аккаунт?</span>
                        <NavLink to="/login">Войти</NavLink>
                    </div> */}

                    <div className="login-registrations">
                        <span>У вас уже есть аккаунт?</span>
                        <NavLink to="/login">Войти</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
