import { CourseContentApi } from "../../../services/api/courseContentApi";
import { setAllTeacherCourses, setCourseContent } from "./actions";

export const uploadCourseContent = (courseId, file, lesson, module) => {
    return (dispatch) => {
        try {
            CourseContentApi.uploadContent(courseId, file, lesson, module).then(
                (data) => {
                    dispatch(setCourseContent(data));
                }
            );
        } catch (e) {
            console.log(e);
        }
    };
};

export const uploadLesson = (courseId, file, lesson, moduleId) => {
    return async (dispatch) => {
        try {
            CourseContentApi.uploadLesson(
                courseId,
                file,
                lesson,
                moduleId
            ).then((data) => {
                dispatch(setCourseContent(data));
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getCourseContent = (courseId) => {
    return async (dispatch) => {
        try {
            CourseContentApi.getCourseCoutent(courseId).then((data) => {
                dispatch(setCourseContent(data));
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getAllTeacherCourses = () => {
    return async (dispatch) => {
        try {
            CourseContentApi.getAllTeacherCourses().then((data) => {
                dispatch(setAllTeacherCourses(data));
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteLesson = (
    courseId,
    moduleId,
    lessonId,
    videoName,
    hours,
    minutes,
    seconds
) => {
    return async (dispatch) => {
        try {
            CourseContentApi.deleteLesson(
                courseId,
                moduleId,
                lessonId,
                videoName,
                hours,
                minutes,
                seconds
            ).then((data) => dispatch(setCourseContent(data)));
        } catch (e) {
            console.log(e);
        }
    };
};

export const lessonTitleRevision = (newTitle, courseId, moduleId, lessonId) => {
    return async (dispatch) => {
        try {
            CourseContentApi.lessonTitleRevision(
                newTitle,
                courseId,
                moduleId,
                lessonId
            ).then((data) => {
                dispatch(setCourseContent(data));
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const sendLinksToResources = (
    courseId,
    moduleId,
    lessonId,
    linkName,
    linksToResources
) => {
    return async (dispatch) => {
        try {
            CourseContentApi.sendLinksToResources(
                courseId,
                moduleId,
                lessonId,
                linkName,
                linksToResources
            ).then((data) => {
                dispatch(setCourseContent(data));
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const setTimeModuleAndLessons = (
    courseId,
    moduleId,
    lessonId,
    hours,
    minutes,
    seconds
) => {
    return async (dispatch) => {
        try {
            CourseContentApi.setTimeModuleAndLessons(
                courseId,
                moduleId,
                lessonId,
                hours,
                minutes,
                seconds
            ).then((data) => {
                dispatch(setCourseContent(data));
            });
        } catch (e) {
            console.log(e);
        }
    };
};
