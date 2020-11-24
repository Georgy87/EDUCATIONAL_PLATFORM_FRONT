import axios from "axios";

export const uploadCourseContent = (
    file,
    lesson
) => {
    return async (dispatch) => {
        try {
            console.log(file, lesson);
            const formData = new FormData();
            formData.append("file", file);
            formData.append("lesson", lesson);

            const response = await axios.post(
                "http://localhost:5000/api/teacher/content",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            // dispatch(addCourses(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getTeacherCourses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/teacher",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            // dispatch(setCourses(response.data));
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
};