import React from "react";
import { NavLink } from "react-router-dom";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import photo from "../../assets/avatar/unnamed.jpg";
import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/ducks/user/actions";
import { AppStateType } from "../../store/store";

const Header: React.FC = (): React.ReactElement => {
    const isAuth = useSelector((state: any) => state.user.isAuth);
    const user = useSelector((state: any) => state.user.user.user);
    let avatar = photo;
    if (user && user.avatar) {
        avatar = `http://localhost:5000/${user.avatar}`;
    }
    const dispatch = useDispatch();
    return (
        <div className="header">
             <NavLink to="/main">
                <span>Платформа</span>
             </NavLink>
             <div className="header-teacher">
                 {user && user.teacher && <NavLink to="/teacher" >
                     <span>Преподаватель</span>
               </NavLink>}
             </div>
             <div className="header-avatar">
                {isAuth && (
                    <NavLink to="/user">
                        <img src={avatar} alt="" />
                    </NavLink>
                )}
            </div>
            <div className="header-into">
                {!isAuth && (
                    <NavLink to="/login">
                        <span>Войти</span>
                    </NavLink>
                )}
                {isAuth && (
                    <NavLink to="/main">
                        <span onClick={() => dispatch(logout())}>Выйти</span>
                    </NavLink>
                )}
            </div>
            <div>
                <NavLink to="/privatoffice">
                    <HomeWorkIcon />
                </NavLink>
            </div>
        </div>
    );
};
export default Header;
