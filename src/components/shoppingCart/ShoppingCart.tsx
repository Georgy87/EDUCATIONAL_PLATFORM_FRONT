import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfo, selectUserLoaded } from '../../store/ducks/user/selectors';
import { useEffect } from 'react';
import { getShoppingCart } from '../../store/ducks/user/saga';
import { useDispatch } from 'react-redux';

import "./ShoppingCart.css";

const ShoppingCart: React.FC = (): React.ReactElement => {
    const user = useSelector(selectUserInfo);
    const loaded = useSelector(selectUserLoaded);

    const dispatch = useDispatch();

    console.log(user);
    useEffect(() => {
        dispatch(getShoppingCart());
    }, []);

    return (
        <div className="cart-shop-container">
            <div className="cart-shop-header">
                <h2>Корзина</h2>
            </div>
            <div className="cart-shop-wrapper">
                <div className="cart-shop-items">
                    {loaded && user.shoppingCartCourses.map(element => {
                        return (
                            <div className="cart-shop-item">
                                <div className="cart-shop-photo">
                                    <img  src={`http://localhost:5000/${element.photo}`} alt="photo"/>
                                </div>
                                <div className="cart-shop-descr">
                                    <p>{element.smallDescription}</p>
                                </div>
                                <div className="cart-shop-delete">
                                    <p>Удалить</p>
                                </div>
                                <div className="cart-shop-price">
                                    <p>{element.price} руб.</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart;
