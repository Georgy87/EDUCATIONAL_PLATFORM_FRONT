import axios from "axios";
import { CourseProfileStateType } from "../../store/ducks/courseProfile/types";
import { GetCommentsType } from "../../store/ducks/courses/types";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

type GetCoursesDataType = {
    courses: CourseProfileStateType[];
};

export const CoursesApi = {
    uploadCourse(formData: FormData) {
        return instance
            .post("teacher/course", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => console.log(response.data));
    },
    getCourses() {
        return instance
            .get<GetCoursesDataType>("course", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                return response.data;
            });
    },
    deleteCourse(payload: { courseId: string; photo: string }) {
        return instance.delete(
            `course?id=${payload.courseId}&name=${payload.photo}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
    },
    getCourseForTraining(id: string) {
        return instance
            .get(`/course/training-course?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((data) => {
                return data.data.course;
            });
    },
    async getComments(id: string) {
        const { data } = await instance.get<GetCommentsType[]>(
            `/course/comment?courseId=${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data;
    },
    async addComment(formData: FormData) {
        const { data } = await instance.post(
            '/course/comment',
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data.data;
    },
    async getReplyToComment(payload: { courseId: string; commentId: string }) {
        const { data } = await instance.get<GetCommentsType>(
            `course/comment/answer?courseId=${payload.courseId}&commentId=${payload.commentId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data;
    },
    async addReplyToComment(payload: { courseId: string; commentId: string; text: string }) {
        const { data } = await instance.post<GetCommentsType>(`course/comment/answer?courseId=${payload.courseId}&commentId=${payload.commentId}`,
            {
                text: payload.text,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data;
    },
};
