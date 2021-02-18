import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./components/app/App";
import { Provider } from "react-redux";
// import {store} from "./reducers/index";
import { store } from './store/store';

import "./index.css"

ReactDOM.render(
    // <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>,
        </Router>,
    // </React.StrictMode>,
    document.getElementById("root")
);



