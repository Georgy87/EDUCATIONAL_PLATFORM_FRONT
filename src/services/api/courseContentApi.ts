import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

type LinksToResourcesApiType = {
    _id: string;
    linkName: string;
    linksToResources: string;
};

type ModuleContentApiType = {
    _id: string;
    fileVideo: string;
    lesson: string;
    lessonTime: string;
    linksToResources: LinksToResourcesApiType[];
};

type ContentApiType = {
    _id: string;
    module: string;
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    moduleContent: ModuleContentApiType[];
};

export type CoursesContentApiType = {
    _id: string;
    user: string;
    photo: string;
    profession: string;
    author: string;
    price: string;
    smallDescription: string;
    fullDescription: string;
    content: ContentApiType[];
    __v: number;
    videoName: string;
    lessonTime: string;
};

export const CourseContentApi = {
    uploadContent(payload: {
        courseId: string | null;
        file: any;
        lesson: string;
        module: string;
    }) {
        const formData = new FormData();
        formData.append("module", payload.module);
        formData.append("file", payload.file);
        formData.append("lesson", payload.lesson);
        return instance
            .post<CoursesContentApiType>(
                `teacher/content?courseId=${payload.courseId}`,
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
    fetchUploadLesson(payload: {
        courseId: string;
        file: any;
        lesson: string;
        moduleId: string;
    }) {
        const formData = new FormData();
        formData.append("file", payload.file);
        formData.append("lesson", payload.lesson);
        formData.append("moduleId", payload.moduleId);
        return instance
            .post<CoursesContentApiType>(
                `teacher/lesson-upload?courseId=${payload.courseId}`,
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
    getCourseCoutent(courseId: string) {
        return instance
            .get<CoursesContentApiType>(
                `teacher/courses?courseId=${courseId}`,
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
        return instance
            .get<CoursesContentApiType[]>("teacher/all-teacher-courses", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    deleteLesson(payload: {
        courseId: string;
        moduleId: string;
        lessonId: string;
        videoName: string;
        hours: number;
        minutes: number;
        seconds: number;
    }) {
        return axios
            .post<CoursesContentApiType>(
                `http://localhost:5000/api/teacher/lesson-delete?courseId=${payload.courseId}`,
                {
                    moduleId: payload.moduleId,
                    lessonId: payload.lessonId,
                    videoName: payload.videoName,
                    hours: payload.hours,
                    minutes: payload.minutes,
                    seconds: payload.seconds,
                },
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
    lessonTitleRevision(payload: {
        newTitle: string;
        courseId: string;
        moduleId: string;
        lessonId: string;
    }) {
        const formData = new FormData();
        formData.append("newTitle", payload.newTitle);
        return axios
            .post<CoursesContentApiType>(
                `http://localhost:5000/api/teacher/lesson?courseId=${payload.courseId}`,
                {
                    newTitle: payload.newTitle,
                    moduleId: payload.moduleId,
                    lessonId: payload.lessonId,
                },
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
    sendLinksToResources(payload: {
        courseId: string;
        moduleId: string;
        lessonId: string;
        linkName: string;
        linksToResources: string;
    }) {
        return axios
            .post<CoursesContentApiType>(
                `http://localhost:5000/api/teacher/link?courseId=${payload.courseId}`,
                {
                    courseId: payload.courseId,
                    moduleId: payload.moduleId,
                    lessonId: payload.lessonId,
                    linkName: payload.linkName,
                    linksToResources: payload.linksToResources,
                },
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
    setTimeModuleAndLessons(payload: {
        courseId: string | null;
        moduleId: string | undefined;
        lessonId: string | undefined;
        hours: number;
        minutes: number;
        seconds: number;
    }) {
        return axios
            .post<CoursesContentApiType>(
                `http://localhost:5000/api/teacher/time?courseId=${payload.courseId}`,
                {
                    moduleId: payload.moduleId,
                    lessonId: payload.lessonId,
                    hours: payload.hours,
                    minutes: payload.minutes,
                    seconds: payload.seconds,
                },
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
