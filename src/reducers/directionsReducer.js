const initialState = {
    courseDirections: [],
    filterByDirection: [],
    isFilter: false
}

const directionsReducer = (state = initialState, action) => {
    switch (action.type) {
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

export default directionsReducer;