import React from "react";
import Modal, { PropsModalType } from "../../../../modals/Modal"
import { Button } from "@material-ui/core";
import { useProfileCourseInfoDopStyles } from "../theme";
import { NavLink } from 'react-router-dom';
import { getShoppingCart } from '../../../../../store/ducks/courseProfile/saga';
import { useDispatch } from 'react-redux';

import "./ModalForShoppingCart.css";

export const ModalForShoppingCart: React.FC<PropsModalType> = (props) => {
    const classes = useProfileCourseInfoDopStyles();
    const dispatch = useDispatch();
    return (
        <div>
            <Modal {...props}>
                <div className="shopping-cart-modal">
                    <h3>Добавленно в корзину</h3>
                    <div className="shopping-cart-courses-modal"></div>
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
