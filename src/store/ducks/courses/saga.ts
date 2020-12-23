import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { CoursesApi } from "../../../services/api/coursesApi";
import { AppStateType } from "../../store";
import { deleteFilterByDirections } from "../directions/actions";
import {
    deleteCourseAction,
    setCourses,
    setLoaded,
    setLoading,
} from "./actions";
import { CoursesActions } from "./types";

export const uploadNewCourse = (
    photoCourse: string | "",
    profession: string,
    author: string,
    price: string,
    shotDescription: string,
    fullDescription: string,
    module: string | "",
    fileVideo: string | "",
    lesson: string | ""
) => {
    const formData = new FormData();
    formData.append("file", fileVideo);
    formData.append("file", photoCourse);
    formData.append("profession", profession);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("smallDescription", shotDescription);
    formData.append("fullDescription", fullDescription);

    formData.append("lesson", lesson);
    formData.append("module", module);
    return async () => {
        try {
            await CoursesApi.uploadCourse(formData);
        } catch (e) {
            console.log(e);
        }
    };
};

type DispatchType = Dispatch<CoursesActions>;
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    CoursesActions
>;

export const getCourses = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setLoading());
        try {
            const data = await CoursesApi.getCourses();
            dispatch(
                setCourses(data.courses)
            );
            dispatch(setLoaded());
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteCourse = (courseId: string, photo: string) => {
    return async (dispatch: any) => {
        try {
            await CoursesApi.deleteCourse(courseId, photo);
            dispatch(deleteCourseAction(courseId));
            dispatch(deleteFilterByDirections(courseId));
        } catch (e) {
            console.log(e);
        }
    };
};
