import React from "react";
import { NavLink } from "react-router-dom";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import photo from "../../assets/avatar/unnamed.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/ducks/user/actions";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { selectUserInfo, selectIsAuth, selectUserLoaded, selectUserAvatar } from "../../store/ducks/user/selectors";
import { getPurchasedCourses, getShoppingCart } from '../../store/ducks/user/saga';

import "./Header.css";

const Header: React.FC = (): React.ReactElement => {
    const isAuth = useSelector(selectIsAuth);
    const userInfo = useSelector(selectUserInfo);
    const userAvatar = useSelector(selectUserAvatar);
    const loaded = useSelector(selectUserLoaded);

    let avatar = photo;

    if (loaded) {
        if (userAvatar) {
            avatar = `http://localhost:5000/${userAvatar}`;
        }
    }

    const dispatch = useDispatch();
    return (
        <div className="header">
            <NavLink to="/main">
                <span>Платформа</span>
            </NavLink>
            <div className="header-teacher">
                {userInfo.user && userInfo.user.user.teacher && <NavLink to="/teacher" >
                    <span>Преподаватель</span>
                </NavLink>}
                {isAuth && <NavLink to="/purchased-courses">
                    <span onClick={() => dispatch(getPurchasedCourses())}>Мое обучение</span>
                </NavLink>}
            </div>
            <div className="header-avatar">
                {isAuth && (
                    <NavLink to="/user-photo">
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
            <div className="header-shopping-cart" onClick={() => dispatch(getShoppingCart())}>
                <NavLink to="/shopping-cart">
                    <ShoppingCartIcon />
                </NavLink>
            </div>
        </div>
    );
};
export default Header;
