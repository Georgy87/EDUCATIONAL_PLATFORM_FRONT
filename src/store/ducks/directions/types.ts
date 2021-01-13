import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../store";
import { CourseDirectionsType, FilterByDirectionType } from "./reducer";

export enum DirectionsActionType {
    SET_COURSE_DIRECTIONS = "SET-COURSE-DIRECTIONS",
    ADD_COURSE_DIRECTIONS = "ADD-COURSE-DIRECTIONS",
    SET_FILTER_BY_DIRECTIONS = "SET-FILTER-BY-DIRECTIONS",
    DELETE_FILTER_BY_DIRECTIONS = "DELETE-FILTER-BY-DIRECTIONS",
    DELETE_COURSE_DIRECTIONS = "DELETE-COURSE-DIRECTIONS",
};

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
