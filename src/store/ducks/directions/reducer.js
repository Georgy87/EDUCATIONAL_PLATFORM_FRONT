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
        case  "DELETE-COURSE-DIRECTIONS":
            return {
                ...state,
                courseDirections: [
                    ...state.courseDirections.filter(course => course._id !== action.payload)
                ]
            }
        default :
            return state
    }
}
export default directionsReducer;