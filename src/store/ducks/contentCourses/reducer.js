import produce from "immer";
const initialState = {
    courseContent: null,
    videoName: "",
    lessonTime: null,
    allTeacherCourses: [],
};

const contentCoursesReducer = produce((draftState = initialState, action) => {
    switch (action.type) {
        case "ADD-COURSE-CONTENT":
            draftState.courseContent = [...draftState.courseContent, action.payload];
            break;
        case "SET-COURSE-CONTENT":
            draftState.courseContent = action.payload;
            break;
        case "SET-VIDEO-NAME":
            draftState.videoName = action.payload;
            break;
        case "SET-TIME-LESSON":
            draftState.lessonTime = { ...action.payload };
            break;
        case "SET-ALL-TEACHER-COURSES":
            draftState.allTeacherCourses = action.payload;
        default:
            break;
    }
}, initialState);

export default contentCoursesReducer;
