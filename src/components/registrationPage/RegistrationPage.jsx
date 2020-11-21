import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { registration } from "../../actions/users";
import "./RegistrationPage.css";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div className="registration-container">
                <div className="registration-background"></div>
                <div className="registration">
                    <div className="registration-wrapper">
                        <div className="registration-inputs">
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
                    <div className="registration-registrations">
                        <span>У вас уже есть аккаунт?</span>
                        <NavLink to="/login">Войти</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;