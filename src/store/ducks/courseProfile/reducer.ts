import produce, {Draft} from "immer";
import { courseProfileActions } from "./actions";
import { CourseProfileType } from './types';
import { ContentCoursesActionsType } from "./types";

export type courseProfileState = {
    courseProfile: CourseProfileType | null,
    courseProfileVideo: string;
}

const initialState: courseProfileState = {
    courseProfile: null,
    courseProfileVideo: "",
};

const courseProfile = produce((draftState: Draft<courseProfileState>, action: courseProfileActions) => {
    switch (action.type) {
        case ContentCoursesActionsType.SET_COURSE_PROFILE:
            draftState.courseProfile = action.payload;
            break;
        case ContentCoursesActionsType.SET_COURSE_PROFILE_VIDEO:
            draftState.courseProfileVideo = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default courseProfile;
