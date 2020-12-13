import userReducer from "../reducers/userReducer";
import coursesReducer from "../reducers/coursesReducer";
import directionsReducer from "../reducers/directionsReducer";
import contentCoursesReducer from "../reducers/contentCoursesReducer";
import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
    user: userReducer,
    course: coursesReducer,
    directions: directionsReducer,
    contentCourses: contentCoursesReducer,
    form: formReducer,
});


