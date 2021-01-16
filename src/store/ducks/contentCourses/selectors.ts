import { AppStateType } from '../../store';

export const selectAllTeacherCourses = (state: AppStateType) => state.contentCourses?.allTeacherCourses;