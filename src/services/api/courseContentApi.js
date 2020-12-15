import axios from "axios";
export const CourseContentApi = {
    uploadContent(courseId, file, lesson, module) {
        const formData = new FormData();
        formData.append("module", module);
        formData.append("file", file);
        formData.append("lesson", lesson);
        return axios
            .post(
                `http://localhost:5000/api/teacher/content?courseId=${courseId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
    uploadLesson(courseId, file, lesson, moduleId) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("lesson", lesson);
        formData.append("moduleId", moduleId);
        return axios
            .post(
                `http://localhost:5000/api/teacher/lesson-upload?courseId=${courseId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
    getCourseCoutent(courseId) {
        return axios
            .get(
                `http://localhost:5000/api/teacher/courses?courseId=${courseId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
    getAllTeacherCourses() {
        return axios
            .get("http://localhost:5000/api/teacher/all-teacher-courses", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    deleteLesson(
        courseId,
        moduleId,
        lessonId,
        videoName,
        hours,
        minutes,
        seconds
    ) {
        return axios
            .post(
                `http://localhost:5000/api/teacher/lesson-delete?courseId=${courseId}`,
                { moduleId, lessonId, videoName, hours, minutes, seconds },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
    lessonTitleRevision(newTitle, courseId, moduleId, lessonId) {
        const formData = new FormData();
        formData.append("newTitle", newTitle);
        return axios
            .post(
                `http://localhost:5000/api/teacher/lesson?courseId=${courseId}`,
                { newTitle, moduleId, lessonId },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
    sendLinksToResources(
        courseId,
        moduleId,
        lessonId,
        linkName,
        linksToResources
    ) {
        return axios
            .post(
                `http://localhost:5000/api/teacher/link?courseId=${courseId}`,
                { moduleId, lessonId, linkName, linksToResources },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
    setTimeModuleAndLessons(
        courseId,
        moduleId,
        lessonId,
        hours,
        minutes,
        seconds
    ) {
        return axios
            .post(
                `http://localhost:5000/api/teacher/time?courseId=${courseId}`,
                { moduleId, lessonId, hours, minutes, seconds },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
};
