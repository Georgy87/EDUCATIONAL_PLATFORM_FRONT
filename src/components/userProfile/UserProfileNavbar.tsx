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
import { AppStateType } from "../../store/store";

const UserProfileNavbar: React.FC = (): React.ReactElement => {
    const userInfo = useSelector((state: AppStateType) => state.user);

    let avatar = defaultAvatar;
    let userName;
    let userSurname;
    if (userInfo.user) {
        avatar = `http://localhost:5000/${userInfo.user.user.avatar}`;
        userName = userInfo.user.user.name;
        userSurname = userInfo.user.user.surname;
    }

    return (
        <div>
            <BrowserRouter>
                <div className="user-container">
                    <div className="user-navbar">
                        <div className="user-pages">
                            <img src={avatar} alt="" />
                            <div className="user-navbar-name-surname">
                                <div>{userName}</div>
                                <div>{userSurname}</div>
                            </div>
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
