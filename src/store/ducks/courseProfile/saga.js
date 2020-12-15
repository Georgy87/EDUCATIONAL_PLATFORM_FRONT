import { CourseProfileApi } from "../../../services/api/courseProfileApi";
import { setCourseProfile, setCourseProfileVideo } from "./actions";
export const getProfileCourse = (courseId) => {
    return async (dispatch) => {
        try {
            CourseProfileApi.getProfile(courseId).then(data => {
                if (data) {
                    const newData = data;
                    const module =  newData.content[0];
                    const lesson = module.moduleContent[0];
                    const lessonVideo = lesson.fileVideo;
                    dispatch(setCourseProfileVideo(lessonVideo));
                }
                dispatch(setCourseProfile(data));
            });
        } catch (error) {
            console.log(error);
        }
    };
};