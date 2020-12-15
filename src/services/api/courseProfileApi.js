import axios from "axios";

export const CourseProfileApi = {
    getProfile(courseId) {
        return axios.get(
            `http://localhost:5000/api/course/profile?id=${courseId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "token"
                    )}`,
                },
            }
        ).then(response => response.data);
    }
}