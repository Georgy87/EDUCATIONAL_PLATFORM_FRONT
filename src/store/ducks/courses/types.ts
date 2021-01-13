import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { CourseProfileStateType } from "../courseProfile/types";
import { AppStateType } from "../../store";

export enum LoadingStateType {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export type CoursesStateType = {
    courses: CourseProfileStateType[];
    isFilter: boolean;
    loadingState: LoadingStateType;
}

export enum CoursesActionType {
    SET_COURSES_LOADING = "SET-COURSES-LOADING",
    SET_COURSES = "SET-COURSES",
    SET_COURSES_LOADED = "SET-COURSES-LOADED",
    DELETE_COURSE = "DELETE-COURSE",
}

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
    | SetDeleteActionType;

// Thunk Types

export type DispatchType = Dispatch<CoursesActions>;
export type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    CoursesActions
>;