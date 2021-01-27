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
            .post("teacher/course", formData)
            .then((response) => console.log(response.data));
    },
    getCourses() {
        return instance.get<GetCoursesDataType>("course").then((response) => {
            return response.data;
        });
    },
    deleteCourse(payload: { courseId: string; photo: string }) {
        return instance.delete(
            `course?id=${payload.courseId}&name=${payload.photo}`
        );
    },
    getCourseForTraining(id: string) {
        return instance.get(`/course/training-course?id=${id}`).then((data) => {
            return data.data.course;
        });
    },
    getComments(id: string) {
        console.log(id);
        return instance.get<GetCommentsType[]>(`/course/comment?courseId=${id}`).then((data) => {
            console.log(data);
            return data.data;
        });
    },
};
