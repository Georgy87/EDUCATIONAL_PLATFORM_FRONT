import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import coursesReducer from "./coursesReducer";
import directionsReducer from "./directionsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    course: coursesReducer,
    directions: directionsReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

