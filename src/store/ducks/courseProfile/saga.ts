import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { CourseProfileApi } from "../../../services/api/courseProfileApi";
import { AppStateType } from "../../store";
import {
    courseProfileActions,
    setCourseProfile,
    setCourseProfileVideo,
} from "./actions";

type DispatchType = Dispatch<courseProfileActions>;
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    courseProfileActions
>;
export const getProfileCourse = (courseId: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseProfileApi.getProfile(courseId);
            if (data) {
                const newData = data;
                const module = newData.content[0];
                const lesson = module.moduleContent[0];
                const lessonVideo = lesson.fileVideo;
                dispatch(setCourseProfileVideo(lessonVideo));
            }
            dispatch(setCourseProfile(data));
        } catch (error) {
            console.log(error);
        }
    };
};
