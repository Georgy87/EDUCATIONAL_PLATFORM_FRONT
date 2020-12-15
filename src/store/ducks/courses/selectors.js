import { LoadingState } from './contracts/state';

export const selectCourses = (state) => state.course;
export const selectLoadingState = (state) => selectCourses(state).loadingState;
export const selectCourseLoading = (state) => selectLoadingState(state) === LoadingState.LOADING;

