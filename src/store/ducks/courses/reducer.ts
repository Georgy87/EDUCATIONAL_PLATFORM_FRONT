import produce, {Draft} from "immer";
import { CourseProfileStateType } from "../courseProfile/types";
// import { CourseProfileType } from "../courseProfile/types";
import { CoursesActions, CoursesActionType, CoursesStateType, LoadingStateType } from "./types";

const initialState: CoursesStateType = {
    courses: [] as Array<CourseProfileStateType>,
    isFilter: false,
    loadingState: LoadingStateType.NEVER,
    courseForTraining: null,
    loadingCourseForTraining: false
};
const coursesReducer = produce((draftState: Draft<CoursesStateType>, action: CoursesActions) => {
    switch (action.type) {
        case CoursesActionType.SET_COURSES_LOADING:
            draftState.loadingState = LoadingStateType.LOADING;
            break;
        case CoursesActionType.SET_COURSES_LOADED:
            draftState.loadingState = LoadingStateType.LOADED;
            break;
        case CoursesActionType.SET_COURSES:
            draftState.courses = action.payload;
            draftState.loadingState = LoadingStateType.LOADED;
            break;
        case CoursesActionType.DELETE_COURSE:
            draftState.courses = [
                ...draftState.courses.filter(
                    (course: any) => course._id !== action.payload
                ),
            ];
            break;
        case CoursesActionType.SET_COURSE_FOR_TRAINING:
            draftState.courseForTraining = action.payload;
            break;
        case CoursesActionType.LOADING_FOR_TRAINING:
            draftState.loadingCourseForTraining = true;
            break;
        default:
            break;
    }
}, initialState);

export default coursesReducer;
