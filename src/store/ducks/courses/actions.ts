import { CourseProfileStateType } from "../courseProfile/types";
import { CoursesActionType, FetchUploadNewCourseType, CoursesStateType, FetchGetCoursesType, SetCoursesActionType, SetDeleteActionType, SetLoadedActionType, SetLoadingActionType, FetchDeleteCourseType } from "./types";


// FETCH ACTIONS

export const fetchUploadNewCourse = (payload: {
    photoCourse: File,
    profession: string,
    author: string,
    price: string,
    shotDescription: string,
    fullDescription: string,
    module: string,
    fileVideo: File,
    lesson: string,
}): FetchUploadNewCourseType => {
    return {
        type:  CoursesActionType.FETCH_UPLOAD_NEW_COURSE,
        payload
    }
}

export const fetchGetCourses = (): FetchGetCoursesType => {
    return {
        type: CoursesActionType.FETCH_GET_COURSES
    }
}

export const fetchDeleteCourse = (payload: { courseId: string; photo: string }): FetchDeleteCourseType => {
    return {
        type: CoursesActionType.FETCH_DELETE_COURSE,
        payload
    }
}

// ACTIONS

export const setLoading = (): SetLoadingActionType => {
    return {
        type: CoursesActionType.SET_COURSES_LOADING,
    };
};

export const setCourses = (payload: Array<CourseProfileStateType>): SetCoursesActionType => {
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


