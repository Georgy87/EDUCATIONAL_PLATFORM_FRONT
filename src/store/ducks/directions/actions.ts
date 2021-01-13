export enum DirectionsActionType {
    SET_COURSE_DIRECTIONS = "SET-COURSE-DIRECTIONS",
    ADD_COURSE_DIRECTIONS = "ADD-COURSE-DIRECTIONS",
    SET_FILTER_BY_DIRECTIONS = "SET-FILTER-BY-DIRECTIONS",
    DELETE_FILTER_BY_DIRECTIONS = "DELETE-FILTER-BY-DIRECTIONS",
    DELETE_COURSE_DIRECTIONS = "DELETE-COURSE-DIRECTIONS",
}

// export type SetCourseDirections = {
//     type:
// }

export const setCourseDirections = (directions: any) => {
    return {
        type: "SET-COURSE-DIRECTIONS",
        payload: directions
    }
}

export const addCourseDirections = (directions: any) => {
    return {
        type: "ADD-COURSE-DIRECTIONS",
        payload: directions
    }
}

export const setFilterByDirections = (files: any) => {
    return {
        type: "SET-FILTER-BY-DIRECTIONS",
        payload: files
    }
}

export const deleteFilterByDirections = (course: any) => {
    return {
        type: "DELETE-FILTER-BY-DIRECTIONS",
        payload: course
    }
}

export const deleteСourseDirections = (course: any) => {
    return {
        type: "DELETE-COURSE-DIRECTIONS",
        payload: course
    }
}