const initialState = {
    courses: [],
    courseDirections: [],
    filterByDirection: [],
    courseProfile: null,
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
        case "DELETE-COURSE":
            return {
                ...state,
                courses: [
                    ...state.courses.filter(course => course._id !== action.payload)
                ]
            }
        case "SET-COURSE-PROFILE":
            return {
                ...state,
                courseProfile: action.payload
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

export const deleteCourseAction = (courseId) => {

    return {
        type: "DELETE-COURSE",
        payload: courseId
    }
}

export const setCourseProfile = (course) => {
    return {
        type: "SET-COURSE-PROFILE",
        payload: course
    }
}

export default filesReducer;