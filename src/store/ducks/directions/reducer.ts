import produce from "immer";
import { DirectionsActions, DirectionsActionType } from "./types";

export type CourseDirectionsType = {
    _id: string;
    name: string;
    direction: string;
};

export type FilterByDirectionType = {
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
    filterByDirection: FilterByDirectionType[];
    isFilter: boolean;
};

const initialState: DirectionsStateType = {
    courseDirections: [],
    filterByDirection: [],
    isFilter: false,
};

const directionsReducer = produce((draftState = initialState, action:  DirectionsActions ) => {
    switch (action.type) {
        case DirectionsActionType.SET_COURSE_DIRECTIONS:
            draftState.courseDirections = action.payload;
            break;
        case DirectionsActionType.ADD_COURSE_DIRECTIONS:
            draftState.courseDirections = [
                ...draftState.courseDirections,
                action.payload,
            ];
            break;
        case DirectionsActionType.SET_FILTER_BY_DIRECTIONS:
            draftState.filterByDirection = action.payload;
            draftState.isFilter = true;
            break;
        case DirectionsActionType.DELETE_FILTER_BY_DIRECTIONS:
            draftState.filterByDirection = [
                ...draftState.filterByDirection.filter(
                    (course: FilterByDirectionType) => course._id !== action.payload
                ),
            ];
            break;
        case DirectionsActionType.DELETE_COURSE_DIRECTIONS:
            draftState.courseDirections = [
                ...draftState.courseDirections.filter(
                    (course: FilterByDirectionType) => course._id !== action.payload
                ),
            ];
            break;
        default:
            break;
    }
}, initialState);
export default directionsReducer;
