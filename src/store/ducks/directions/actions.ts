import { CourseDirectionsType, FilterByDirectionType } from "./reducer"
import { AddCourseDirectionsActionType, DeleteFilterByDirectionsActionType, DeleteСourseDirectionsActionType, DirectionsActionType, SetCourseDirectionsActionType } from "./types"

export const addCourseDirections = (directions: CourseDirectionsType): AddCourseDirectionsActionType => {
    return {
        type:  DirectionsActionType.ADD_COURSE_DIRECTIONS,
        payload: directions
    }
}

export const setCourseDirections = (directions: CourseDirectionsType): SetCourseDirectionsActionType => {
    return {
        type: DirectionsActionType.SET_COURSE_DIRECTIONS,
        payload: directions
    }
}

export const setFilterByDirections = (payload: FilterByDirectionType[]) => {
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
    return {
        type: DirectionsActionType.DELETE_COURSE_DIRECTIONS,
        payload: directionId
    }
}