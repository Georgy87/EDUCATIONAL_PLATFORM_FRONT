import axios from "axios";

export const CoursesApi = {
    uploadCourse(formData) {
        return axios.post(
            "http://localhost:5000/api/teacher/course",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        ).then(response => response.data);
    },
    getCourses() {
        return axios.get(
            "http://localhost:5000/api/course",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "token"
                    )}`,
                },
            }
        ).then(response => response.data);
    },
    deleteCourse(courseId, photo) {
        return axios.delete(
            `http://localhost:5000/api/course?id=${courseId}&name=${photo}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "token"
                    )}`,
                },
            }
        );
    }
};
