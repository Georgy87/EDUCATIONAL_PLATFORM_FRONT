import produce, { Draft } from "immer";
import { CourseProfileActions } from "./actions";
import { courseProfileState, CourseProfileStateType } from "./types";
import { CourseProfileActionsType } from "./types";

const initialState: courseProfileState = {
    courseProfile: null,
    courseProfileVideo: "",
    teacher: null,
};

const courseProfile = produce(
    (draftState: Draft<courseProfileState>, action: CourseProfileActions) => {
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
            default:
                break;
        }
    },
    initialState
);

export default courseProfile;
