import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import LoginPage from "../loginPage/LoginPage";
import MainPage from "../mainPage/MainPage";
import Registration from "../registrationPage/RegistrationPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../../store/ducks/user/saga";
import PrivateOffice from "../ privateOffice/PrivateOffice";
import Courses from "../courses/Courses";
import { getCourses } from "../../store/ducks/courses/saga";
import ProfileCourse from "../profileCourse/ProfileCourse";
import UserProfileNavbar from "../userProfile/UserProfileNavbar";
import RegistrationPageForTeacher from "../registrationPageForTeacher/registrationTeacher/registrationTeacher";
import TeacherPrivateOffice from '../teacherPrivateOffice/TeacherPrivateOffice';
import ProfileTeacher from "../profileTeacher/ProfileTeacher";
import ShoppingCart from '../shoppingCart/ShoppingCart';

import "./App.css";
import Checkout from '../checkout/Checkout';


const App = () => {
    const dispatch = useDispatch();
    dispatch(getCourses());
    useEffect(() => {
        dispatch(auth());
        // dispatch(getCourses());
    }, []);
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/privatoffice" component={PrivateOffice} />
                    <Route path="/main" component={MainPage} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/courses/:filter?"  component={Courses} />
                    <Route path="/profile/:profileId?" component={ProfileCourse} />
                    <Route path="/user-photo" component={() => <UserProfileNavbar />} />
                    <Route path="/user-info" component={() => <UserProfileNavbar />} />
                    <Route path="/registration-teacher" component={RegistrationPageForTeacher} />
                    <Route path="/teacher" component={TeacherPrivateOffice} />
                    <Route path="/profile-teacher/:teacherId?" component={ProfileTeacher} />
                    <Route path="/shopping-cart" component={ShoppingCart} />
                    <Route path="/checkout" component={Checkout} exact/>
                    {/* <Redirect to="/main" /> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
