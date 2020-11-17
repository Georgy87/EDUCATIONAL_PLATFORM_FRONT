import React from "react";
import { NavLink } from "react-router-dom";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import photo from "../../assets/avatar/unnamed.jpg";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-avatar">
                <NavLink to="/user">
                    <img src={photo} alt="" />
                </NavLink>
            </div>
            <div className="header-into">
                <NavLink to="/login">
                    <span>Войти</span>
                </NavLink>
            </div>
            <div>
                <NavLink to="/privatoffice">
                    <HomeWorkIcon style={{ marginRight: "21px" }} />
                </NavLink>
            </div>
        </div>
    );
};
export default Header;
