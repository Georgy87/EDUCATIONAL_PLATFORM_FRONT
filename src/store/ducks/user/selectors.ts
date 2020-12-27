import { AppStateType } from '../../store';
import { UserActionType } from './types';

export const selectUserInfo = (state: AppStateType) => state.user;
export const selectIsAuth = (state: AppStateType) => state.user.isAuth;
export const selectUserAvatar = (state: AppStateType) => state.user.user?.user.avatar;

export const selectLoadingState = (state: AppStateType) => selectUserInfo(state).loadingState;
export const selectUserLoaded = (state: AppStateType) => selectLoadingState(state) === UserActionType.SET_LOADED;
