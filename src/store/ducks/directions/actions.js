export const setCourseDirections = (directions) => {
    return {
        type: "SET-COURSE-DIRECTIONS",
        payload: directions
    }
}

export const addCourseDirections = (directions) => {
    return {
        type: "ADD-COURSE-DIRECTIONS",
        payload: directions
    }
}

export const setFilterByDirections = (files) => {
    return {
        type: "SET-FILTER-BY-DIRECTIONS",
        payload: files
    }
}

export const deleteFilterByDirections = (course) => {
    return {
        type: "DELETE-FILTER-BY-DIRECTIONS",
        payload: course
    }
}

export const deleteСourseDirections = (course) => {
    return {
        type: "DELETE-COURSE-DIRECTIONS",
        payload: course
    }
}