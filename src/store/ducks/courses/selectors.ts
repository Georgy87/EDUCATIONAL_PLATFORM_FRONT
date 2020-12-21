import { AppStateType } from '../../store';
import {  LoadingStateType } from './types';

export const selectCourses = (state: AppStateType) => state.course;
export const selectLoadingState = (state: AppStateType) => selectCourses(state).loadingState;
export const selectCourseLoading = (state: AppStateType) => selectLoadingState(state) ===  LoadingStateType.LOADING;
