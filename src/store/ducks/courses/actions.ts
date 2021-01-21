import { CourseProfileStateType } from "../courseProfile/types";
import { CoursesActionType, FetchUploadNewCourseType, FetchGetCoursesType, SetCoursesActionType, SetDeleteActionType, SetLoadedActionType, SetLoadingActionType, FetchDeleteCourseType, SetCourseForTrainingType, FetchGetCourseForTraining, SetLoadingCourseForTrainingType } from "./types";

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

export const fetchGetCourseForTraining = (payload: string): FetchGetCourseForTraining => {
    return {
        type: CoursesActionType.FETCH_COURSE_FOR_TRAINING,
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

export const setCourseForTraining = (payload: CourseProfileStateType): SetCourseForTrainingType => {
    return {
        type: CoursesActionType.SET_COURSE_FOR_TRAINING,
        payload
    }
}

export const SetLoadingCourseForTraining = (): SetLoadingCourseForTrainingType => {
    return {
        type: CoursesActionType.LOADING_FOR_TRAINING,
    }
}

