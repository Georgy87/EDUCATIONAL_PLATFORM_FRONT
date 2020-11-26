const initialState = {
    courseContent: null,
    videoName: ''
}

const teacherCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "GET-COURSE-CONTENT":
            return {
                ...state,
                courseContent: action.payload
            }
        case  "ADD-COURSES-TEACHER":
            return {
                ...state,
                teacherCourses: [...state.teacherCourses, action.payload],
            }
        case  "SET-VIDEO-NAME":
            return {
                ...state,
                videoName: action.payload
            }
        default :
            return state
    }
}

export const getCourseContent = (content) => {
    return {
        type: "GET-COURSE-CONTENT",
        payload: content
    }
}

export const addCoursesTeacher = (course) => {
    return {
        type: "ADD-COURSES-TEACHER",
        payload: course
    }
}

export const setVideoName = (videoName) => {
    console.log(videoName);
    return {
        type: "SET-VIDEO-NAME",
        payload: videoName
    }
}

export default teacherCoursesReducer;