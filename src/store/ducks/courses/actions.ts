import { CourseProfileStateType } from "../courseProfile/types";
import { CoursesActionType, CoursesStateType, SetCoursesActionType, SetDeleteActionType, SetLoadedActionType, SetLoadingActionType } from "./types";

export const setLoading = (): SetLoadingActionType => {
    return {
        type: CoursesActionType.SET_COURSES_LOADING,
    };
};

export const setCourses = (payload: CourseProfileStateType[]): SetCoursesActionType => {
    console.log(payload);
    return {
        type: CoursesActionType.SET_COURSES,
        payload
    };
};

export const setLoaded = (): SetLoadedActionType => {
    return {
        type: CoursesActionType.SET_COURSES_LOADED,
    };
};

export const deleteCourseAction = (payload: string): SetDeleteActionType => {
    return {
        type: CoursesActionType.DELETE_COURSE,
        payload,
    };
};
