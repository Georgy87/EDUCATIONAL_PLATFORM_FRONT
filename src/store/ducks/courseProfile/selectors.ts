import { AppStateType } from "../../store";
import { CourseProfileActionsType } from "./types";

export const selectTeacher = (state: AppStateType) => state.courseProfile;
export const selectTeacherInfo = (state: AppStateType) => state.courseProfile.teacher;


export const selectLoadingState = (state: AppStateType) => selectTeacher(state).loadingState;
export const selectTeacherLoaded = (state: AppStateType) => selectLoadingState(state) === CourseProfileActionsType.SET_LOADED;