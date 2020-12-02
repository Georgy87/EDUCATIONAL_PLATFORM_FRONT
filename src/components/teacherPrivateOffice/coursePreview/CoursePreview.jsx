import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteLesson } from "../../../actions/contentCourses";
// import { setVideoName } from "../../../reducers/contentCoursesReducer";
import { MediaPlayer } from "../../courseVideoPleer/CourseVideoPleer";
import CourseLessons from "./courseLessons/CourseLessons";
import "./CoursePreview.css";

const CoursePreview = () => {
    const lessons = useSelector((state) => state.contentCourses.courseContent);
    const videoName = useSelector((state) => state.contentCourses.videoName);

    return (
        <div>
            <div className="teacher-course-preview">
                <MediaPlayer videoName={videoName} />
                <div className="teacher-course-list">
                    {lessons &&
                        lessons.content.map((el) => {
                            return <CourseLessons
                                    key={el._id}
                                    id={el._id}
                                    module={el.module}
                                    fileVideo={el.fileVideo}
                                    lesson={el.lesson}
                                />
                        })}
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;
