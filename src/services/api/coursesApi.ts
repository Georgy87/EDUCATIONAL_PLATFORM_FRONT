import axios from "axios";
import { CourseProfileType } from "../../store/ducks/courseProfile/types";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const CoursesApi = {
    uploadCourse(formData: FormData) {
        return instance
            .post("api/teacher/course", formData)
            .then((response) => response.data);
    },
    getCourses() {
        return instance.get<CourseProfileType[]>("course").then((response) => response.data);
    },
    deleteCourse(courseId: string, photo: string) {
        return instance.delete(`course?id=${courseId}&name=${photo}`);
    },
};
