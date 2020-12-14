import produce from "immer";
const initialState = {
    courses: [],
    courseDirections: [],
    filterByDirection: [],
    isFilter: false,
};

const coursesReducer = produce((draftState = initialState, action) => {
    switch (action.type) {
        case "SET-COURSES":
            draftState.courses = action.payload;
            break;
        case "ADD-COURSES":
            draftState.courses = [...draftState.courses, action.payload];
            break;
        case "SET-COURSE-DIRECTIONS":
            draftState.courseDirections = action.payload;
            break;
        case "ADD-COURSE-DIRECTIONS":
            draftState.courseDirections = [
                ...draftState.courseDirections,
                action.payload,
            ];
            break;
        case "SET-FILTER-BY-DIRECTIONS":
            draftState.filterByDirection = action.payload;
            draftState.isFilter = true;
            break;
        case "DELETE-COURSE":
            draftState.courses = [
                ...draftState.courses.filter(
                    (course) => course._id !== action.payload
                ),
            ];
            break;
        default:
            break;
    }
}, initialState);

export default coursesReducer;
