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
            const data = await CourseProfileApi.getProfile(courseId, userId);
            if (data) {
                const newData = data;
                const module = newData.content[0];
                const lesson = module.moduleContent[0];
                const lessonVideo = lesson.fileVideo;
                dispatch(actions.setCourseProfileVideo(lessonVideo));
            }
            dispatch(actions.setCourseProfile(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const getTeahcer = (teacherId: string): ThunkType  => {
    return async () => {
        try {
            const data = await CourseProfileApi.getTeacher(teacherId);
            console.log(teacherId);
        } catch (error) {
            console.log({error: `Get teacher ${error}`});
        }
    }
}