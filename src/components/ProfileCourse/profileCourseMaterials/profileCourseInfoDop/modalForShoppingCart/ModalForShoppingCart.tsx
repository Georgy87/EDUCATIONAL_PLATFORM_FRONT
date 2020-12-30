import React from "react";
import Modal, { PropsModalType } from "../../../../modals/Modal"
import { Button } from "@material-ui/core";
import { useProfileCourseInfoDopStyles } from "../theme";
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from "../../../../../store/ducks/user/saga";
import { selectCourseProfileState, selectTeacherInfo } from "../../../../../store/ducks/courseProfile/selectors";
import { useSelector } from 'react-redux';
import "./ModalForShoppingCart.css";

export const ModalForShoppingCart: React.FC<PropsModalType> = (props): React.ReactElement => {
    const classes = useProfileCourseInfoDopStyles();
    const teacherInfo = useSelector(selectTeacherInfo);

    if (teacherInfo) {
        console.log(teacherInfo);
    }


    const dispatch = useDispatch();
    return (
        <div>
            <Modal {...props}>
                <div className="shopping-cart-modal">
                    <h3>Добавленно в корзину</h3>
                    <div className="shopping-cart-courses-modal">
                        <h3>Курсы преподавателя {teacherInfo?.name}</h3>
                        {teacherInfo && teacherInfo.courses.map(el => {
                            return (
                                <div className="shopping-cart-courses-modal-items">
                                    <img  src={`http://localhost:5000/${el.photo}`} alt=""/>
                                    <p>{el.smallDescription}</p>
                                </div>
                            )

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
