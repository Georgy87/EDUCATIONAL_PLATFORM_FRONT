import { AppStateType } from '../../store';

export const selectContentCourses = (state: AppStateType) => state.contentCourses;
export const selectAllTeacherCourses = (state: AppStateType) => selectContentCourses(state).allTeacherCourses;

export const selectLessonTime = (state: AppStateType) =>  selectContentCourses(state).lessonTime;
export const selectCourseModule = (state: AppStateType) => selectContentCourses(state).courseContent;
export const selectVideoName = (state: AppStateType) => selectContentCourses(state).videoName;
