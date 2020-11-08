import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from '../header/Header';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import Registration from '../registration/Registration';

import "./App.css";

const App = () => {
    return (
		<BrowserRouter>
			<div className="App">
			<Header/>
			<Switch>
				<Route exact path="/main" component={MainPage} />
				<Route path="/registration" component={Registration} />
				<Route path="/login" component={LoginPage} />
			</Switch>
			</div>
			{/* <Redirect to="/main" /> */}
		</BrowserRouter>
	)
}

export default App;
