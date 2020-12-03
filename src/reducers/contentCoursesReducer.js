const initialState = {
    courseContent: null,
    videoName: '',
    // links: null
}

const contentCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "ADD-COURSE-CONTENT":
            return {
                ...state,
                courseContent: [...state.courseContent, action.payload],
            }
        case  "SET-COURSE-CONTENT":
            return {
                ...state,
                courseContent: action.payload
            }
        case  "SET-VIDEO-NAME":
            return {
                ...state,
                videoName: action.payload
            }
        // case  "SET-LINKS":
        //     return {
        //         ...state,
        //         links: action.payload
        //     }
        default :
            return state
    }
}

export const addCourseContent = (content) => {
    return {
        type: "ADD-COURSE-CONTENT",
        payload: content
    }
}

export const setCourseContent = (content) => {
    return {
        type: "SET-COURSE-CONTENT",
        payload: content
    }
}

export const setVideoName = (videoName) => {
    return {
        type: "SET-VIDEO-NAME",
        payload: videoName
    }
}

// export const setLinks = (links) => {
//     return {
//         type: "SET-LINKS",
//         payload: videoName
//     }
// }

export default contentCoursesReducer;