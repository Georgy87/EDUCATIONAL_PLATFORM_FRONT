import { CourseDirectionsType, FilterByDirectionType } from "./reducer"
import { AddCourseDirectionsActionType, DeleteFilterByDirectionsActionType, DeleteСourseDirectionsActionType, DirectionsActionType, FetchDeleteDirectionType, FetchFilterByDirectionType, FetchGetCourseDirectionsType, FetchUploadCourseDirectionsType, SetCourseDirectionsActionType, SetFilterByDirectionsActionType } from "./types"

// FETCH ACTIONS

export const fetchUploadCourseDirections = (payload: { file: File; direction: string }): FetchUploadCourseDirectionsType => {
    return {
        type: DirectionsActionType.FETCH_UPLOAD_COURSE_DIRECTIONS,
        payload
    }
}

export const fetchGetCourseDirections = (): FetchGetCourseDirectionsType => {
    return {
        type: DirectionsActionType.FETCH_GET_COURSE_DIRECTIONS,
    }
}

export const fetchFilterByDirection = (payload: string): FetchFilterByDirectionType => {
    return {
        type: DirectionsActionType.FETCH_FILTER_BY_DIRECTION,
        payload
    }
}

export const fetchDeleteDirection = (payload: { directionId: string, direction: string }): FetchDeleteDirectionType => {
    return {
        type: DirectionsActionType.FETCH_DELETE_DIRECTION,
        payload
    }
}

// ACTIONS

export const addCourseDirections = (directions: CourseDirectionsType): AddCourseDirectionsActionType => {
    return {
        type: DirectionsActionType.ADD_COURSE_DIRECTIONS,
        payload: directions
    }
}

export const setCourseDirections = (directions: CourseDirectionsType[]): SetCourseDirectionsActionType => {
    return {
        type: DirectionsActionType.SET_COURSE_DIRECTIONS,
        payload: directions
    }
}

export const setFilterByDirections = (payload: FilterByDirectionType[]): SetFilterByDirectionsActionType  => {
    return {
        type: DirectionsActionType.SET_FILTER_BY_DIRECTIONS,
        payload
    }
}

export const deleteFilterByDirections = (id: string): DeleteFilterByDirectionsActionType => {
    return {
        type: DirectionsActionType.DELETE_FILTER_BY_DIRECTIONS,
        payload: id
    }
}

export const deleteСourseDirections = (directionId: string): DeleteСourseDirectionsActionType => {
    console.log(directionId);
    return {
        type: DirectionsActionType.DELETE_COURSE_DIRECTIONS,
        payload: directionId
    }
}