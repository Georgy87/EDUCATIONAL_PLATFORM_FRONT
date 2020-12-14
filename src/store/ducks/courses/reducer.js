const initialState = {
    courses: [],
    courseDirections: [],
    filterByDirection: [],
    courseProfile: null,
    isFilter: false
}

const coursesReducer = (state = initialState, action) => {
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
        case "DELETE-COURSE":
            return {
                ...state,
                courses: [
                    ...state.courses.filter(course => course._id !== action.payload)
                ]
            }
        // case "SET-COURSE-PROFILE":
        //     return {
        //         ...state,
        //         courseProfile: action.payload
        //     }
        default :
            return state
    }
}

export default coursesReducer;