import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import LoginPage from "../LoginPage/LoginPage";
import MainPage from "../MainPage/MainPage";
import Registration from "../registration/Registration";
import { useDispatch } from "react-redux";
import { useEffect} from "react";
import "./App.css";
import { auth } from '../../actions/users';
import PrivateOffice from '../ PrivateOffice/PrivateOffice';
import SliderCourses from '../SliderCourses/SliderCourses';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, []);
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <PrivateOffice />
                <Switch>
                    <Route exact path="/main" component={MainPage} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </div>
            <Redirect to="/main" />
        </BrowserRouter>
    );
};

export default App;
