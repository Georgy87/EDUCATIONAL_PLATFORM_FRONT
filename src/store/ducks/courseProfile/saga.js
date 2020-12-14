import axios from "axios";
import { setCourseProfile } from "./actions";
export const getProfileCourse = (courseId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/course/profile?id=${courseId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            if (response.data) {
                const data = response.data;
                const module =  data.content[0];
                const lesson = module.moduleContent[0];
                const lessonVideo = lesson.fileVideo;
                console.log(lessonVideo);
            }
            dispatch(setCourseProfile(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};