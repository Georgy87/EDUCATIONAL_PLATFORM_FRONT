const initialState = {
    courseContent: null,
    videoName: "",
    lessonTime: null,
};

const contentCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-COURSE-CONTENT":
            return {
                ...state,
                courseContent: [...state.courseContent, action.payload],
            };
        case "SET-COURSE-CONTENT":
            return {
                ...state,
                courseContent: action.payload,
            };
        case "SET-VIDEO-NAME":
            return {
                ...state,
                videoName: action.payload,
            };
        case "SET-TIME-LESSON":
            return {
                ...state,
                lessonTime: { ...action.payload },
            };
        default:
            return state;
    }
};

export const addCourseContent = (content) => {
    return {
        type: "ADD-COURSE-CONTENT",
        payload: content,
    };
};

export const setCourseContent = (content) => {
    return {
        type: "SET-COURSE-CONTENT",
        payload: content,
    };
};

export const setVideoName = (videoName) => {
    return {
        type: "SET-VIDEO-NAME",
        payload: videoName,
    };
};

export const setTimeLesson = (courseId, moduleId, lessonId) => {
    return {
        type: "SET-TIME-LESSON",
        payload: {
            courseId,
            moduleId,
            lessonId,
        },
    };
};

export default contentCoursesReducer;
