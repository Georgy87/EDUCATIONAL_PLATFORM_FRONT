import axios from "axios";
import { CourseProfileStateType } from "../../store/ducks/courseProfile/types";

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
    deleteCourse(courseId: string, photo: string) {
        return instance.delete(`course?id=${courseId}&name=${photo}`);
    },
};
