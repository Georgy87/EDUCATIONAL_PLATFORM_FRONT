import produce, { Draft } from "immer";
import { CourseProfileActions } from "./actions";
import { CourseProfileState } from "./types";
import { CourseProfileActionsType } from "./types";

const initialState: CourseProfileState = {
    courseProfile: null,
    courseProfileVideo: "",
    teacher: null,
    loadingState: "NEVER",
};

const courseProfile = produce(
    (draftState: Draft<CourseProfileState>, action: CourseProfileActions) => {
        switch (action.type) {
            case CourseProfileActionsType.SET_COURSE_PROFILE:
                draftState.courseProfile = action.payload;
                break;
            case CourseProfileActionsType.SET_COURSE_PROFILE_VIDEO:
                draftState.courseProfileVideo = action.payload;
                break;
            case CourseProfileActionsType.SET_TEACHER:
                draftState.teacher = action.payload;
                break;
            case CourseProfileActionsType.SET_LOADING:
                draftState.loadingState = CourseProfileActionsType.SET_LOADING;
                break;
            case CourseProfileActionsType.SET_LOADED:
                draftState.loadingState = CourseProfileActionsType.SET_LOADED;
                break;
            default:
                break;
        }
    },
    initialState
);

export default courseProfile;
