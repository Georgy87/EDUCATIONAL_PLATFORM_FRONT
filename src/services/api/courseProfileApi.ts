import axios from "axios";
import { CourseProfileType } from "../../store/ducks/courseProfile/types";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const CourseProfileApi = {
    getProfile(courseId: string) {
        return instance
            .get<CourseProfileType>(`course/profile?id=${courseId}`)
            .then((response) => response.data);
    },
};
