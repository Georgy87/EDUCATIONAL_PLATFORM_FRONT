import React, { useState } from "react";
import { registration } from "../../actions/users";
import "./RegistrationPageForTeacher.css";
import { NavLink } from "react-router-dom";

const RegistrationPageForTeacher = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div className="teacher-registration-container">
                <NavLink to="/main">
                    <span className="teacher-back">Платформа</span>
                </NavLink>
                <div className="teacher-registration-background"></div>
                <div className="teacher-registration">
                    <div className="teacher-registration-wrapper">
                        <div className="teacher-registration-inputs">
                            <h1>Зарегистрироваться</h1>
                            <label htmlFor="name">Имя</label>
                            <input
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                type="text"
                            />
                            <label htmlFor="name">Фамилия</label>
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
                                REGISTRATION
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPageForTeacher;
