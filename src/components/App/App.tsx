import React from "react";
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from "../header/Header";
import LoginPage from "../loginPage/LoginPage";
import MainPage from "../mainPage/MainPage";
import Registration from "../registrationPage/RegistrationPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuth, fetchGetPurchasedCourses } from "../../store/ducks/user/actions";
import Courses from "../courses/Courses";
import { fetchGetCourses } from "../../store/ducks/courses/actions";
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
import { MyLeaningPage } from "../myLeaningPage/MyLeaningPage";
import { CourseCommentPage } from "../myLeaningPage/courseCommentPage/CourseCommentPage";

function App() {
    const dispatch = useDispatch();
    let history = useHistory();
    const loading = useSelector(selectUserInfo);
    useEffect(() => {
        if (history.location.pathname === '/') {
            history.push('/main');
        }
        dispatch(fetchGetCourses());
        // history.push('/main');
        dispatch(fetchAuth());
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
                    <Route path="/purchased-courses/leaning/:id" component={MyLeaningPage} exact />
                    {/* <Redirect to="/main" /> */}

                    <Route path={`/purchased-courses/leaning/materials/:id`} component={() => <MyLeaningPage />} />
                    <Route exact path={`/purchased-courses/leaning/comments/:id`} component={() => <MyLeaningPage />} />
                </Switch>
            </div>
    );
};

export default App;
