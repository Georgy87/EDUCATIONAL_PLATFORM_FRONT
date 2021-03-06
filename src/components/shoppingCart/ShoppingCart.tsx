import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectCoursesData } from '../../store/ducks/user/selectors';
import { fetchGetShoppingCart } from '../../store/ducks/user/actions';
import { fetchDeleteShoppingCartCourse } from '../../store/ducks/user/actions';
import { Button } from '../button/Button';

import "./ShoppingCart.css";

const ShoppingCart: React.FC = (): React.ReactElement => {
    const courses = useSelector(selectCoursesData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetShoppingCart());
    }, []);

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
                                <div className="cart-shop-delete" onClick={() => dispatch(fetchDeleteShoppingCartCourse(element._id))}>
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
                            typeStyle="primary"
                            type={undefined}
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
