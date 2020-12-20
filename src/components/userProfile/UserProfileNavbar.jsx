import React from "react";
import UserProfilePhoto from "./UserProfilePhoto/UserProfilePhoto";
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
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";

const UserProfileNavbar = () => {
    const userInfo = useSelector((state) => state.user);
    
    let avatar = defaultAvatar;
    if (userInfo.user) {
        avatar = `http://localhost:5000/${userInfo.user.user.avatar}`;
    }
    return (
        <div>
            <BrowserRouter>
                <div className="user-container">
                    <div className="user-navbar">
                        <div className="user-pages">
                            <img src={avatar} alt="" />
                            <NavLink to="/user-photo">
                                <div>Фотография</div>
                            </NavLink>
                            <NavLink to="/user-info">
                                <div>Профиль</div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="drag-container">
                        <Switch>
                            <Route
                                path="/user-photo"
                                render={() => <UserProfilePhoto />}
                            />
                            <Route
                                path="/user-info"
                                render={() => <UserProfileInfo />}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default UserProfileNavbar;
