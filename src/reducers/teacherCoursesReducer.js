const initialState = {
    teacherCourses: [],
}

const teacherCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "SET-COURSES-TEACHER":
            return {
                ...state,
                teacherCourses: action.payload
            }
        case  "ADD-COURSES-TEACHER":
            return {
                ...state,
                teacherCourses: [...state.teacherCourses, action.payload],
            }
        default :
            return state
    }
}

export const setCoursesTeacher = (courses) => {
    return {
        type: "SET-COURSES-TEACHER",
        payload: courses
    }
}

export const addCoursesTeacher = (course) => {
    return {
        type: "ADD-COURSES-TEACHER",
        payload: course
    }
}

export default teacherCoursesReducer;