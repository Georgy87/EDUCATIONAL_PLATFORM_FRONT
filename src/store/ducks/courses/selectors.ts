import { AppStateType } from '../../store';
import {  LoadingStateType } from './types';

export const selectCourses = (state: AppStateType) => state.course;
export const selectLoadingState = (state: AppStateType) => selectCourses(state).loadingState;
export const selectCourseLoading = (state: AppStateType) => selectLoadingState(state) ===  LoadingStateType.LOADING;

export const selectCourseForTraining = (state: AppStateType) => state.course.courseForTraining?.content;
export const selectLoadingTraining = (state: AppStateType) => state.course.loadingCourseForTraining;
export const selectVideoForPleer = (state: AppStateType) => state.course.videoForPleer;

export const selectLessonsList = (state: AppStateType) => state.course.courseVideosList;

export const selectComments = (state: AppStateType) => state.course.comments;
export const selectLoadingComments = (state: AppStateType) => state.course.loadingComments;
// export const selectRepliesToComment = (state: AppStateType) => state.course.comments;
export const selectCourseForTrainingId = (state: AppStateType) => state.course.courseForTraining?._id;


