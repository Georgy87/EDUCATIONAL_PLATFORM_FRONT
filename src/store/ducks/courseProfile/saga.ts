import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { CourseProfileApi } from "../../../services/api/courseProfileApi";
import { AppStateType } from "../../store";
import { actions, CourseProfileActions } from "./actions";


type DispatchType = Dispatch<CourseProfileActions>;
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    CourseProfileActions
>;
export const getProfileCourse = (courseId: string, userId: string): ThunkType  => {
    return async (dispatch: DispatchType) => {
        try {
            actions.setUserLoading();
            const data = await CourseProfileApi.getProfile(courseId, userId);
            if (data) {
                const newData = data;
                const module = newData.content[0];
                const lesson = module.moduleContent[0];
                const lessonVideo = lesson.fileVideo;
                dispatch(actions.setCourseProfileVideo(lessonVideo));
            }
            dispatch(actions.setCourseProfile(data));
            actions.setUserLoaded();
        } catch (error) {
            console.log(error);
        }
    };
};

export const getTeahcer = (teacherId: string | undefined): ThunkType  => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseProfileApi.getTeacher(teacherId);
            dispatch(actions.setTeacher(data));
        } catch (error) {
            console.log({error: `Get teacher ${error}`});
        }
    }
}