import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import LoginPage from "../loginPage/LoginPage";
import MainPage from "../mainPage/MainPage";
import Registration from "../registrationPage/RegistrationPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import { auth } from "../../actions/users";
import PrivateOffice from "../ privateOffice/PrivateOffice";
import Courses from "../courses/Courses";
import { getCourses } from "../../actions/courses";
import ProfileCourse from "../profileCourse/ProfileCourse";
import UserProfileNavbar from "../userProfile/UserProfileNavbar";
import RegistrationPageForTeacher from "../registrationPageForTeacher/RegistrationPageForTeacher";

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
                    <Route exact path="/user" render={() => <UserProfileNavbar />} />
                    <Route path="/registration-teacher" component={RegistrationPageForTeacher} />
                    <Redirect to="/main" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
