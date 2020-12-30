import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfo, selectUserLoaded, selectCoursesData } from '../../store/ducks/user/selectors';
import { useEffect } from 'react';
import { deleteShoppingCartCourse, getShoppingCart } from '../../store/ducks/user/saga';
import { useDispatch } from 'react-redux';
import { Button } from "@material-ui/core";
import { useProfileCourseInfoDopStyles } from '../profileCourse/profileCourseMaterials/profileCourseInfoDop/theme';

import "./ShoppingCart.css";
import { NavLink } from 'react-router-dom';

const ShoppingCart: React.FC = (): React.ReactElement => {
    const classes = useProfileCourseInfoDopStyles();
    const user = useSelector(selectUserInfo);
    const loaded = useSelector(selectUserLoaded);
    const courses = useSelector(selectCoursesData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShoppingCart());
    }, []);

    if (loaded) {
        courses?.coursesDestructured.map(el => {
            console.log(el);
        })
    }
    
    return (
        <div className="cart-shop-container">
            <div className="cart-shop-header">
                <h2>Корзина</h2>
            </div>
            <div className="cart-shop-items-wrapper">
                <div className="cart-shop-items">

                    {courses?.coursesDestructured.length != 0 ? courses?.coursesDestructured.map(element => {
                        return (
                            <div className="cart-shop-item">
                                <div className="cart-shop-photo">
                                    <img src={`http://localhost:5000/${element.photo}`} alt="photo" />
                                </div>
                                <div className="cart-shop-descr">
                                    <p>{element.smallDescription}</p>
                                </div>
                                <div className="cart-shop-delete" onClick={() => dispatch(deleteShoppingCartCourse(element.id))}>
                                    <p>Удалить</p>
                                </div>
                                <div className="cart-shop-price">
                                    <p>{element.price} руб.</p>
                                </div>
                            </div>
                        )
                    }) : (
                            <>
                                <h1>Ваша корзина пуста</h1>
                            </>
                        )}
                </div>
            </div>
            <div className="cart-shop-total-wrapper">
                <div className="cart-shop-total">
                    <h3>Итого:</h3>
                    <h2>{courses?.totalPrice} руб.</h2>
                </div>
                <div className="cart-shop-total-btn">
                    <NavLink to="/checkout">
                        <Button
                            variant="contained"
                            className={classes.cartShopBtn}
                        >
                            Оформление заказа
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart;
