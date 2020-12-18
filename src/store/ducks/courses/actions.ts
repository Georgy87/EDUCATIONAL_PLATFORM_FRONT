import { CourseProfileType } from "../courseProfile/types";
import { CoursesActionType, SetCoursesActionType, SetDeleteActionType, SetLoadedActionType, SetLoadingActionType } from "./types";

export const setLoading = (): SetLoadingActionType => {
    return {
        type: CoursesActionType.SET_COURSES_LOADING,
    };
};

export const setCourses = (payload: CourseProfileType[]): SetCoursesActionType => {
    return {
        type: CoursesActionType.SET_COURSES,
        payload,
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

// export const addCourses = (course: any) => {
//     return {
//         type: "ADD-COURSES",
//         payload: course,
//     };
// };
