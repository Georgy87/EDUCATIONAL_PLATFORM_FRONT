import React from "react";
import Modal, { PropsModalType } from "../../../../modals/Modal"
import { Button } from "@material-ui/core";
import { useProfileCourseInfoDopStyles } from "../theme";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from "../../../../../store/ducks/user/saga";
import { selectCourseProfileState, selectTeacherInfo } from "../../../../../store/ducks/courseProfile/selectors";
import { useSelector } from 'react-redux';
import "./ModalForShoppingCart.css";

interface MatchParams {
    teacherId: string;
    photo: string;
}

export const ModalForShoppingCart: React.FC<PropsModalType> = (props): React.ReactElement => {
    const classes = useProfileCourseInfoDopStyles();
    const teacherInfo = useSelector(selectTeacherInfo);
    const courseProfile = useSelector(selectCourseProfileState);
    if (courseProfile) {
        console.log(courseProfile.courseProfile?.content);
    }
    console.log('hello');

    const dispatch = useDispatch();
    return (
        <div>
            <Modal {...props}>
                <div className="shopping-cart-modal">
                    <h3>Добавленно в корзину</h3>
                    <div className="shopping-cart-courses-modal">
                        {courseProfile && courseProfile.courseProfile?.content.map(el => {
                            console.log(el);
                        })}
                    </div>
                </div>
                <div className="shopping-cart-btn">
                    <Button
                            variant="contained"
                            className={classes.cartShopBtn}
                            onClick={() => dispatch(getShoppingCart())}
                        >
                        <NavLink to="/shopping-cart">
                            Перейти в корзину
                        </NavLink>
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
