import produce, {Draft} from "immer";
import { courseProfileActions } from "./actions";
import { courseProfileType } from './actions';

export interface courseProfileState {
    courseProfile: courseProfileType | null,
    courseProfileVideo: string;
}

const initialState: courseProfileState = {
    courseProfile: null,
    courseProfileVideo: "",
};

const courseProfile = produce((draftState: Draft<courseProfileState>, action: courseProfileActions) => {
    switch (action.type) {
        case "SET-COURSE-PROFILE":
            draftState.courseProfile = action.payload;
            break;
        case "SET-COURSE-PROFILE-VIDEO":
            draftState.courseProfileVideo = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default courseProfile;
