import produce from "immer";
const initialState = {
    courseDirections: [],
    filterByDirection: [],
    isFilter: false,
};

const directionsReducer = produce((draftState = initialState, action) => {
    switch (action.type) {
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
        case "DELETE-FILTER-BY-DIRECTIONS":
            draftState.filterByDirection = [
                ...draftState.filterByDirection.filter(
                    (course) => course._id !== action.payload
                ),
            ];
            break;
        case "DELETE-COURSE-DIRECTIONS":
            draftState.courseDirections = [
                ...draftState.courseDirections.filter(
                    (course) => course._id !== action.payload
                ),
            ];
            break;
        default:
            break;
    }
}, initialState);
export default directionsReducer;
