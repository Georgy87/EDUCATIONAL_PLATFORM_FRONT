import userReducer from "./ducks/user/reducer";
import coursesReducer from "./ducks/courses/reducer";
import directionsReducer from "./ducks/directions/reducer";
import contentCoursesReducer from "./ducks/contentCourses/reducer";
import courseProfile from "./ducks/courseProfile/reducer";
import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
    user: userReducer,
    course: coursesReducer,
    directions: directionsReducer,
    contentCourses: contentCoursesReducer,
    courseProfile: courseProfile,
    form: formReducer,
});




