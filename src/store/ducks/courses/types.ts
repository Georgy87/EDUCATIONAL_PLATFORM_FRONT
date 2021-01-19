import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../store";
import { CourseProfileStateType } from "../courseProfile/types";
import { DeleteFilterByDirectionsActionType } from "../directions/types";

export enum LoadingStateType {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

// STATE TYPES

export type CoursesStateType = {
    courses: CourseProfileStateType[];
    isFilter: boolean;
    loadingState: LoadingStateType;
}

export enum CoursesActionType {
    FETCH_UPLOAD_NEW_COURSE = "FETCH_UPLOAD_NEW_COURSE",
    FETCH_GET_COURSES = "FETCH-GET-COURSES",
    FETCH_DELETE_COURSE = "FETCH-DELETE-COURSE",
    SET_COURSES_LOADING = "SET-COURSES-LOADING",
    SET_COURSES = "SET-COURSES",
    SET_COURSES_LOADED = "SET-COURSES-LOADED",
    DELETE_COURSE = "DELETE-COURSE",
}

// FETCH ACTIONS TYPES

export type FetchGetCoursesType = {
    type: CoursesActionType.FETCH_GET_COURSES;
}

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
    }
}

export type FetchDeleteCourseType = {
    type: CoursesActionType.FETCH_DELETE_COURSE,
    payload: { courseId: string; photo: string; }
}

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

export type CoursesActions =
    | SetLoadingActionType
    | SetCoursesActionType
    | SetLoadedActionType
    | SetDeleteActionType
    | DeleteFilterByDirectionsActionType;

// Thunk Types

export type DispatchType = Dispatch<CoursesActions>;
export type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    CoursesActions
>;