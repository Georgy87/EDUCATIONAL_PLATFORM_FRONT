import React from "react";
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from "../header/Header";
import LoginPage from "../loginPage/LoginPage";
import MainPage from "../mainPage/MainPage";
import Registration from "../registrationPage/RegistrationPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../../store/ducks/user/saga";
import Courses from "../courses/Courses";
import { getCourses } from "../../store/ducks/courses/saga";
import ProfileCourse from "../profileCourse/ProfileCourse";
import UserProfileNavbar from "../userProfile/UserProfileNavbar";
import RegistrationPageForTeacher from "../registrationPageForTeacher/registrationTeacher/registrationTeacher";
import ProfileTeacher from "../profileTeacher/ProfileTeacher";
import ShoppingCart from '../shoppingCart/ShoppingCart';
import Checkout from '../checkout/Checkout';
import MyTrainingPage from '../ myTrainingPage/MyTrainingPage';
import { selectUserInfo } from '../../store/ducks/user/selectors';
import TwitterIcon from '@material-ui/icons/Twitter';
import PrivateOfficeAdmin from '../privateOfficeAdmin/PrivateOfficeAdmin';
import TeacherPrivateOfficeAdmin from '../teacherPrivateOffice/TeacherPrivateOffice';

import "./App.css";

function App() {
    const dispatch = useDispatch();
    let history = useHistory();
    const loading = useSelector(selectUserInfo);

    useEffect(() => {
        dispatch(getCourses());
        // history.push('/main');
        dispatch(auth());
    }, []);

    if (loading.loadingState === "NEVER") {
        return (
            <div className="app-circular-progress">
                 <TwitterIcon color="primary" style={{ width: 100, height: 100 }} />
            </div>
        )
    }

    return (
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/privatoffice" component={PrivateOfficeAdmin} />
                    <Route path="/main" component={MainPage} />
                    <Route path="/registration" component={() => <Registration />} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/courses/:filter?" component={Courses} />
                    <Route path="/profile/:profileId?" component={ProfileCourse} />
                    <Route path="/user-photo" component={() => <UserProfileNavbar />} />
                    <Route path="/user-info" component={() => <UserProfileNavbar />} />
                    <Route path="/registration-teacher" component={RegistrationPageForTeacher} />
                    <Route path="/teacher" component={TeacherPrivateOfficeAdmin} />
                    <Route path="/profile-teacher/:teacherId?" component={ProfileTeacher} />
                    <Route path="/shopping-cart" component={ShoppingCart} />
                    <Route path="/checkout" component={Checkout} exact />
                    <Route path="/purchased-courses" component={MyTrainingPage} exact />

                    {/* <Redirect to="/main" /> */}
                </Switch>
            </div>
    );
};

export default App;
