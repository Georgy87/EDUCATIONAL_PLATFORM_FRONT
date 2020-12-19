import axios from "axios";
// import { CourseProfileStateType } from "../../store/ducks/courseProfile/types";
import { CourseProfileStateTy } from "../../store/ducks/courses/types";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const CoursesApi = {
    uploadCourse(formData: FormData) {
        return instance
            .post("teacher/course", formData)
            .then((response) => console.log(response.data));
    },
    getCourses() {
        return instance
            .get("course")
            .then((response) => {return response});
    },
    deleteCourse(courseId: string, photo: string) {
        return instance.delete(`course?id=${courseId}&name=${photo}`);
    },
};
