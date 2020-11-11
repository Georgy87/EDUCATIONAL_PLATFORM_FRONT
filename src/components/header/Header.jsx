import React from "react";
import { NavLink } from "react-router-dom";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-into">
                <NavLink to="/login">
                    <span>Войти</span>
                </NavLink>
            </div>
            <div>
                <NavLink to="/privatoffice">
                    <HomeWorkIcon style={{marginTop: '21px'}}/>
                </NavLink>
            </div>
        </div>
    );
};
export default Header;
