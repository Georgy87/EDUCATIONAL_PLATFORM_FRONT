import axios from "axios";
import { setAllTeacherCourses, setCourseContent } from "./actions";

export const uploadCourseContent = (courseId, file, lesson, module) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("module", module);
            formData.append("file", file);
            formData.append("lesson", lesson);

            const response = await axios.post(
                `http://localhost:5000/api/teacher/content?courseId=${courseId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            dispatch(setCourseContent(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const uploadLesson = (courseId, file, lesson, moduleId) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("lesson", lesson);
            formData.append("moduleId", moduleId);

            const response = await axios.post(
                `http://localhost:5000/api/teacher/lesson-upload?courseId=${courseId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setCourseContent(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getCourseContent = (courseId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/teacher/courses?courseId=${courseId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            // console.log(response.data);
            dispatch(setCourseContent(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getAllTeacherCourses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/teacher/all-teacher-courses",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setAllTeacherCourses(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteLesson = (courseId, moduleId, lessonId, videoName, hours, minutes, seconds) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `http://localhost:5000/api/teacher/lesson-delete?courseId=${courseId}`,
                {  moduleId, lessonId, videoName, hours, minutes, seconds },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setCourseContent(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const lessonTitleRevision = (newTitle, courseId, moduleId, lessonId) => {
    const formData = new FormData();
    formData.append("newTitle", newTitle);
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `http://localhost:5000/api/teacher/lesson?courseId=${courseId}`,
                { newTitle, moduleId, lessonId },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            dispatch(setCourseContent(response.data));
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
            const response = await axios.post(
                `http://localhost:5000/api/teacher/link?courseId=${courseId}`,
                { moduleId, lessonId, linkName, linksToResources },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            dispatch(setCourseContent(response.data));
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
            const response = await axios.post(
                `http://localhost:5000/api/teacher/time?courseId=${courseId}`,
                { moduleId, lessonId, hours, minutes, seconds},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setCourseContent(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};