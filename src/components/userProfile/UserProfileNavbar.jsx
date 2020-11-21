import React from "react";
import UserProfile from "./UserProfile/UserProfile";
import "./UserProfileNavbar.css";
import { useSelector } from "react-redux";
import defaultAvatar from "../../assets/avatar/unnamed.jpg";
import {
    BrowserRouter,
    NavLink,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { useEffect } from "react";

const UserProfileNavbar = () => {
    const user = useSelector((state) => state.user.user.user);

    let avatar = defaultAvatar;
    if (user && user.avatar) {
        avatar = `http://localhost:5000/${user.avatar}`;
    }
    return (
        <div>
            <BrowserRouter>
                <div className="user-container">
                    <div className="user-navbar">
                        <div className="user-pages">
                            <img src={avatar} alt="" />
                            <NavLink to="/photo">
                                <div>Фотография</div>
                            </NavLink>
                            <NavLink to="/user">
                                <div>Профиль</div>
                            </NavLink>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/user" render={() => <UserProfile />} />
                    </Switch>
                </div>
                <Redirect to="/user" />
            </BrowserRouter>
        </div>
    );
};

export default UserProfileNavbar;
