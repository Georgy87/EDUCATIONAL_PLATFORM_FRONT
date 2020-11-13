const initialState = {
    courses: [],
    courseDirections: [],
    filterByDirection: [],
    isFilter: false
}
const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "SET-COURSES":
            return {
                ...state,
                courses: action.payload
            }
        case  "ADD-COURSES":
            return {
                ...state,
                courses: [...state.courses, action.payload],
            }
        case  "SET-COURSE-DIRECTIONS":
            return {
                ...state,
                courseDirections: action.payload
            }
        case  "ADD-COURSE-DIRECTIONS":
            return {
                ...state,
                courseDirections: [...state.courseDirections, action.payload],
            }
        case  "SET-FILTER-BY-DIRECTIONS":
            return {
                ...state,
                filterByDirection: action.payload,
                isFilter: true
            }
        default :
            return state
    }
}

export const setCourses = (courses) => {
    return {
        type: "SET-COURSES",
        payload: courses
    }
}

export const addCourses = (course) => {
    return {
        type: "ADD-COURSES",
        payload: course
    }
}

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

export default filesReducer;