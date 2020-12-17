import { CourseProfileType } from "../courseProfile/types";
export enum CoursesActionType {
    SET_COURSES_LOADING = "SET-COURSES-LOADING",
    SET_COURSES = "SET-COURSES",
    SET_COURSES_LOADED = "SET-COURSES-LOADED",
    // ADD_COURSES = "ADD-COURSES",
    DELETE_COURSE = "DELETE-COURSE",
}

export type SetLoadingActionType = {
    type: CoursesActionType.SET_COURSES_LOADING;
};

export type SetCoursesActionType = {
    type: CoursesActionType.SET_COURSES;
    payload: CourseProfileType[];
};

export type SetLoadedActionType = {
    type: CoursesActionType.SET_COURSES_LOADED;
};

export type SetDeleteActionType = {
    type: CoursesActionType.DELETE_COURSE;
    payload: string;
};

export type CoursesActions =
    | SetLoadingActionType
    | SetCoursesActionType
    | SetLoadedActionType
    | SetDeleteActionType;

export const setLoading = (): SetLoadingActionType => {
    return {
        type: CoursesActionType.SET_COURSES_LOADING,
    };
};

export const setCourses = (
    payload: CourseProfileType[]
): SetCoursesActionType => {
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

// export const addCourses = (course: any) => {
//     return {
//         type: "ADD-COURSES",
//         payload: course,
//     };
// };

export const deleteCourseAction = (payload: string): SetDeleteActionType => {
    return {
        type: CoursesActionType.DELETE_COURSE,
        payload,
    };
};
