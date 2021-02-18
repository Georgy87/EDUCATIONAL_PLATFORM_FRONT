import { AppStateType } from '../../store';
import { UserActionType } from './types';

export const selectUserInfo = (state: AppStateType) => state.user;
export const selectVerify = (state: AppStateType) =>  selectUserInfo(state).verify;
export const selectIsAuth = (state: AppStateType) => state.user.isAuth;
export const selectUserAvatar = (state: AppStateType) => state.user.user?.user.avatar;
export const selectCoursesData = (state: AppStateType) => state.user.shoppingCartCourses?.coursesData;

export const selectLoadingState = (state: AppStateType) => selectUserInfo(state).loadingState;
export const selectSubmitLoading = (state: AppStateType) => selectUserInfo(state).submitLoading;
export const selectUserLoaded = (state: AppStateType) => selectLoadingState(state) === UserActionType.SET_LOADED;
export const selectUserStatus = (state: AppStateType) =>  selectUserInfo(state).loadingState;
export const selectPurchasedCourses = (state: AppStateType) => selectUserInfo(state).purchasedCourses;
export const selectPurchasedCoursesLoading = (state: AppStateType) => selectUserInfo(state).loadingPurchasedCourses;