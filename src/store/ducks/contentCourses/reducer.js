const initialState = {
    courseContent: null,
    videoName: "",
    lessonTime: null,
    allTeacherCourses: []
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
        case "SET-ALL-TEACHER-COURSES":
            return {
                ...state,
                allTeacherCourses: action.payload,
            };
        default:
            return state;
    }
};

export default contentCoursesReducer;