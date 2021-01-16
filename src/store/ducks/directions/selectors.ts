import { AppStateType } from '../../store';

export const selectCourseDirections = (state: AppStateType) => state.directions.courseDirections;