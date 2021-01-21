import { CourseProfileStateType } from "../courseProfile/types";
import { DeleteFilterByDirectionsActionType } from "../directions/types";

export enum LoadingStateType {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

// STATE TYPES

export type CoursesStateType = {
    courses: CourseProfileStateType[];
    isFilter: boolean;
    loadingState: LoadingStateType;
    courseForTraining: CourseProfileStateType | null;
    loadingCourseForTraining: Boolean;
};

export enum CoursesActionType {
    FETCH_UPLOAD_NEW_COURSE = "FETCH_UPLOAD_NEW_COURSE",
    FETCH_GET_COURSES = "FETCH-GET-COURSES",
    FETCH_DELETE_COURSE = "FETCH-DELETE-COURSE",
    FETCH_COURSE_FOR_TRAINING = "FETCH_COURSE_FOR_TRAINING",
    SET_COURSES_LOADING = "SET-COURSES-LOADING",
    SET_COURSES = "SET-COURSES",
    SET_COURSES_LOADED = "SET-COURSES-LOADED",
    DELETE_COURSE = "DELETE-COURSE",
    COURSE_FOR_TRAINING = "COURSE_FOR_TRAINING",
    SET_COURSE_FOR_TRAINING = "SET_COURSE_FOR_TRAINING",
    LOADING_FOR_TRAINING = "LOADING_FOR_TRAINING"
}

// FETCH ACTIONS TYPES

export type FetchGetCoursesType = {
    type: CoursesActionType.FETCH_GET_COURSES;
};

export type FetchUploadNewCourseType = {
    type: CoursesActionType.FETCH_UPLOAD_NEW_COURSE;
    payload: {
        photoCourse: File;
        profession: string;
        author: string;
        price: string;
        shotDescription: string;
        fullDescription: string;
        module: string;
        fileVideo: File;
        lesson: string;
    };
};

export type FetchDeleteCourseType = {
    type: CoursesActionType.FETCH_DELETE_COURSE;
    payload: { courseId: string; photo: string };
};

export type FetchGetCourseForTraining = {
    type: CoursesActionType.FETCH_COURSE_FOR_TRAINING;
    payload: string;
};

// ACTIONS TYPES

export type SetLoadingActionType = {
    type: CoursesActionType.SET_COURSES_LOADING;
};

export type SetCoursesActionType = {
    type: CoursesActionType.SET_COURSES;
    payload: Array<CourseProfileStateType>;
};

export type SetLoadedActionType = {
    type: CoursesActionType.SET_COURSES_LOADED;
};

export type SetDeleteActionType = {
    type: CoursesActionType.DELETE_COURSE;
    payload: string;
};

export type SetCourseForTrainingType = {
    type: CoursesActionType.SET_COURSE_FOR_TRAINING;
    payload: CourseProfileStateType;
};

export type SetLoadingCourseForTrainingType = {
    type: CoursesActionType.LOADING_FOR_TRAINING
}

export type CoursesActions =
    | SetLoadingActionType
    | SetCoursesActionType
    | SetLoadedActionType
    | SetDeleteActionType
    | DeleteFilterByDirectionsActionType
    | SetCourseForTrainingType
    | SetLoadingCourseForTrainingType;

