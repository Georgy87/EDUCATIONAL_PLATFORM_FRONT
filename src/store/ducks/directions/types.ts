import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../store";
import { CourseDirectionsType, FilterByDirectionType } from "./reducer";

export enum DirectionsActionType {
    FETCH_UPLOAD_COURSE_DIRECTIONS = "FETCH-UPLOAD-COURSE-DIRECTIONS",
    FETCH_GET_COURSE_DIRECTIONS = "FETCH-GET-COURSE-DIRECTIONS",
    FETCH_FILTER_BY_DIRECTION = "FETCH-FILTER-BY-DIRECTION",
    FETCH_DELETE_DIRECTION = "FETCH-DELETE-DIRECTION",
    SET_COURSE_DIRECTIONS = "SET-COURSE-DIRECTIONS",
    ADD_COURSE_DIRECTIONS = "ADD-COURSE-DIRECTIONS",
    SET_FILTER_BY_DIRECTIONS = "SET-FILTER-BY-DIRECTIONS",
    DELETE_FILTER_BY_DIRECTIONS = "DELETE-FILTER-BY-DIRECTIONS",
    DELETE_COURSE_DIRECTIONS = "DELETE-COURSE-DIRECTIONS",
}

// FETCH TYPES

export type FetchUploadCourseDirectionsType = {
    type: DirectionsActionType.FETCH_UPLOAD_COURSE_DIRECTIONS;
    payload: { file: File; direction: string };
};

export type FetchGetCourseDirectionsType = {
    type: DirectionsActionType.FETCH_GET_COURSE_DIRECTIONS;
}

export type FetchFilterByDirectionType = {
    type: DirectionsActionType.FETCH_FILTER_BY_DIRECTION;
    payload: string;
}

export type FetchDeleteDirectionType = {
    type: DirectionsActionType.FETCH_DELETE_DIRECTION;
    payload: { directionId: string; direction: string; }
}

// ACTIONS

export type AddCourseDirectionsActionType = {
    type: DirectionsActionType.ADD_COURSE_DIRECTIONS;
    payload: CourseDirectionsType;
};

export type SetCourseDirectionsActionType = {
    type: DirectionsActionType.SET_COURSE_DIRECTIONS;
    payload: CourseDirectionsType[];
};

export type SetFilterByDirectionsActionType = {
    type: DirectionsActionType.SET_FILTER_BY_DIRECTIONS;
    payload: FilterByDirectionType[];
};

export type DeleteFilterByDirectionsActionType = {
    type: DirectionsActionType.DELETE_FILTER_BY_DIRECTIONS;
    payload: string;
};

export type DeleteСourseDirectionsActionType = {
    type: DirectionsActionType.DELETE_COURSE_DIRECTIONS;
    payload: string;
};

export type DirectionsActionsType =
    | AddCourseDirectionsActionType
    | SetCourseDirectionsActionType
    | SetFilterByDirectionsActionType
    | DeleteFilterByDirectionsActionType
    | DeleteСourseDirectionsActionType;

// Thunk types

export type DispatchType = Dispatch<DirectionsActionsType>;
export type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    DirectionsActionsType
>;
