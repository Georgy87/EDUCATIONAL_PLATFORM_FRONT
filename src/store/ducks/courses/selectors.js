import {  LoadingStateType } from './types';

export const selectCourses = (state) => state.course;
export const selectLoadingState = (state) => selectCourses(state).LoadingStateType;
export const selectCourseLoading = (state) => selectLoadingState(state) ===  LoadingStateType.LOADING;

