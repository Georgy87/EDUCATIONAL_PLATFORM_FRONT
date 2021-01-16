import { AppStateType } from '../../store';

export const selectCourseDirections = (state: AppStateType) => state.directions.courseDirections;
export const selectFilterByDirection = (state: AppStateType) => state.directions.filterByDirection;