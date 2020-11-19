import React from "react";
import UserProfile from "./UserProfile/UserProfile";
import "./UserProfileNavbar.css";
import {
    BrowserRouter,
    NavLink,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

const UserProfileNavbar = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="user-container">
                    <div className="user-navbar">
                        <div className="user-pages">
                            <NavLink to="/photo">
                                <div>Фотография</div>
                            </NavLink>
                            <NavLink to="/user">
                                <div>Профиль</div>
                            </NavLink>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/photo" render={() => <UserProfile />} />
                    </Switch>
                    <Redirect to="/photo" />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default UserProfileNavbar;
