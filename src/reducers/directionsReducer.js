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
        case  "DELETE-FILTER-BY-DIRECTIONS":
            return {
                ...state,
                filterByDirection: [
                    ...state.filterByDirection.filter(course => course._id !== action.payload)
                ]
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

export const deleteFilterByDirections = (course) => {
    console.log(course);
    return {
        type: "DELETE-FILTER-BY-DIRECTIONS",
        payload: course
    }
}

export default directionsReducer;