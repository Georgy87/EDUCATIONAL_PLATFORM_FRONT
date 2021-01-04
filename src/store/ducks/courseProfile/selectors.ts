import { AppStateType } from "../../store";
import { CourseProfileActionsType } from "./types";

export const selectCourseProfileState = (state: AppStateType) => state.courseProfile;
export const selectTeacherInfo = (state: AppStateType) => state.courseProfile.teacher;

export const selectCourseProfile = (state: AppStateType) => state.courseProfile.courseProfile;
export const selectVideo = (state: AppStateType) => state.courseProfile.courseProfileVideo;
export const selectLoadingState = (state: AppStateType) => selectCourseProfileState(state).loadingState;
export const selectTeacherLoaded = (state: AppStateType) => selectLoadingState(state) === CourseProfileActionsType.SET_LOADED;
export const selectUserAuth = (state: AppStateType) => state.user.isAuth;