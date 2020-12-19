import produce, {Draft} from "immer";
// import { CourseProfileType } from "../courseProfile/types";
import { CoursesActions, CoursesActionType, CoursesStateType, LoadingStateType } from "./types";

const initialState: CoursesStateType = {
    courses: [],
    isFilter: false,
    loadingState: LoadingStateType.NEVER,
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
        default:
            break;
    }
}, initialState);

export default coursesReducer;
