import produce from "immer";

export type CourseDirectionsType = {
    _id: string;
    name: string;
    direction: string;
};

export type FilterByDirection = {
    _id: string;
    user: string;
    avatar: string;
    photo: string;
    profession: string;
    competence: string;
    author: string;
    price: string;
    smallDescription: string;
    fullDescription: string;
};

export type DirectionsStateType = {
    courseDirections: CourseDirectionsType[];
    filterByDirection: FilterByDirection[];
    isFilter: boolean;
};

const initialState: DirectionsStateType = {
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
                    (course: any) => course._id !== action.payload
                ),
            ];
            break;
        case "DELETE-COURSE-DIRECTIONS":
            draftState.courseDirections = [
                ...draftState.courseDirections.filter(
                    (course: any) => course._id !== action.payload
                ),
            ];
            break;
        default:
            break;
    }
}, initialState);
export default directionsReducer;
