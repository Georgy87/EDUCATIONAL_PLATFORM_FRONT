import React, { useEffect, useState } from "react";
import { countries } from './ listOfCountries';
import { Button } from '@material-ui/core';
import { useProfileCourseInfoDopStyles } from '../profileCourse/profileCourseMaterials/profileCourseInfoDop/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectCoursesData } from "../../store/ducks/user/selectors";
import { fetchGetShoppingCart } from "../../store/ducks/user/actions";
import { fetchPurchasedCourses } from "../../store/ducks/user/actions";

import "./Checkout.css";

const Checkout: React.FC = (): React.ReactElement => {
    const [value, setValue] = useState('');
    const classes = useProfileCourseInfoDopStyles();

    const courses = useSelector(selectCoursesData);

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetShoppingCart());
    }, []);

    const onPurchasedCourses = (): void => {
        let purchasedCoursesIds: string[] = [];
        if (courses) {
            courses?.coursesDestructured.map(el => {
                console.log(el.id);
                purchasedCoursesIds.push(el.id);
            });
            dispatch(fetchPurchasedCourses({ids: purchasedCoursesIds, totalPrice: courses.totalPrice}));
        }
    }

    return (
        <div className="checkout-container">
            <div className="checkout-ordering">
                <h2>Оформление заказа</h2>
                <p>Адрес выставления счета</p>
                <select onChange={e => changeHandler(e)} placeholder="Страна">
                    {countries.map(el => {
                        return (
                            <option value={el}>{el}</option>
                        )
                    })}
                </select>
                <div className="checkout-list-wrapper">
                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <p>VISA заканчивающаяся на 3954</p>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <p>Оплатить через Yandex Money</p>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <p>PayPal</p>
                        </li>
                        <span>Добавить новую карту</span>
                    </ul>
                </div>
            </div>
            <div className="checkout-small-descr">
                <h3>Итого: {courses?.totalPrice}</h3>
                    <div className="checkout-small-descr-btn">
                        <Button
                            onClick={onPurchasedCourses}
                            variant="contained"
                            className={classes.cartShopBtn}
                        >
                            Завершить оплату
                        </Button>
                    </div>
            </div>
        </div>
    )
}

export default Checkout;

