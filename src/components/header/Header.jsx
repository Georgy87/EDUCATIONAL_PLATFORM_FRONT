import React from "react";
import {NavLink} from "react-router-dom"
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-into">
                <NavLink to="/login">
                    <span>Войти</span>
                </NavLink>
            </div>
        </div>
    );
};
export default Header;
