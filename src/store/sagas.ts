import { all } from "redux-saga/effects";
import { ContentCourseSaga } from "./ducks/contentCourses/saga";
import { CourseProfileSaga } from "./ducks/courseProfile/saga";
import { CoursesSaga } from "./ducks/courses/saga";
import { DirectionsSaga } from "./ducks/directions/saga";
import { UserSaga } from "./ducks/user/saga";

export function* rootSaga() {
    yield all([UserSaga(), ContentCourseSaga(), CoursesSaga(), DirectionsSaga(), CourseProfileSaga() ]);
    // code after all-effect
}