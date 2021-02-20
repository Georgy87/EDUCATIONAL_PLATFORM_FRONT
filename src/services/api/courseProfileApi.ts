import axios from "axios";
import {
    CourseProfileStateType,
    TeacherType,
} from "../../store/ducks/courseProfile/types";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const CourseProfileApi = {
    getProfile(courseId: string) {
        return instance
            .get<CourseProfileStateType>(`course/profile?id=${courseId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    getTeacher(teacherId: string | undefined) {
        return instance
            .get<TeacherType>(`course/teacher-profile?teacherId=${teacherId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })

            .then((response) => response.data);
    },
};
