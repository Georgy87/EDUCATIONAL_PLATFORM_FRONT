import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import filesReducer from "./filesReducer";
import userReducer from './userReducer';


const rootReducer = combineReducers({
    user: userReducer,
    files: filesReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));