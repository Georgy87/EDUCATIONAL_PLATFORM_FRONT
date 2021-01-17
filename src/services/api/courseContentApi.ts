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
    uploadContent(courseId: string | null, file: any, lesson: string, module: string) {
        const formData = new FormData();
        formData.append("module", module);
        formData.append("file", file);
        formData.append("lesson", lesson);
        return instance
            .post<CoursesContentApiType>(`teacher/content?courseId=${courseId}`, formData)
            .then((response) => response.data);
    },
    uploadLesson(
        courseId: string,
        file: string,
        lesson: string,
        moduleId: string
    ) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("lesson", lesson);
        formData.append("moduleId", moduleId);
        return instance
            .post<CoursesContentApiType>(`teacher/lesson-upload?courseId=${courseId}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    getCourseCoutent(courseId: string | null) {
        return instance
            .get<CoursesContentApiType>(`teacher/courses?courseId=${courseId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
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
    deleteLesson(
        courseId: string,
        moduleId: string,
        lessonId: string,
        videoName: string,
        hours: number,
        minutes: number,
        seconds: number
    ) {
        return axios
            .post<CoursesContentApiType>(
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
    lessonTitleRevision(
        newTitle: string,
        courseId: string,
        moduleId: string,
        lessonId: string
    ) {
        const formData = new FormData();
        formData.append("newTitle", newTitle);
        return axios
            .post<CoursesContentApiType>(
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
        courseId: string,
        moduleId: string,
        lessonId: string,
        linkName: string,
        linksToResources: string
    ) {
        return axios
            .post<CoursesContentApiType>(
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
        courseId: string | undefined,
        moduleId: string | undefined,
        lessonId: string | undefined,
        hours: number,
        minutes: number,
        seconds: number
    ) {
        return axios
            .post<CoursesContentApiType>(
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
