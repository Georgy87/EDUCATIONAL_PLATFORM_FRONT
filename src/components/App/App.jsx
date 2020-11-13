import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import LoginPage from "../loginPage/LoginPage";
import MainPage from "../mainPage/MainPage";
import Registration from "../registration/Registration";
import { useDispatch } from "react-redux";
import { useEffect} from "react";
import "./App.css";
import { auth } from '../../actions/users';
import PrivateOffice from '../ privateOffice/PrivateOffice';
import Courses from '../courses/Courses';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth());
    }, []);
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/privatoffice" component={PrivateOffice } />
                    <Route exact path="/main" component={MainPage} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/courses" component={Courses } />
                </Switch>
            </div>
            <Redirect to="/main" />
        </BrowserRouter>
    );
};

export default App;
