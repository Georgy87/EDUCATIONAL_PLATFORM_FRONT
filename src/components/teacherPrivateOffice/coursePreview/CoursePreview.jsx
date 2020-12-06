import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteLesson } from "../../../actions/contentCourses";
// import { setVideoName } from "../../../reducers/contentCoursesReducer";
import { MediaPlayer } from "../../courseVideoPleer/CourseVideoPleer";
import CourseLessons from "./courseLessons/CourseLessons";
import CourseModules from "./courseModules/CourseModules";
import "./CoursePreview.css";

const CoursePreview = () => {
    const lessonsModule = useSelector((state) => state.contentCourses.courseContent);
    const videoName = useSelector((state) => state.contentCourses.videoName);
    console.log(videoName);
    return (
        <div>
            <div className="teacher-course-preview">
                <MediaPlayer videoName={videoName} />
                <div className="teacher-course-list">
                    {lessonsModule &&
                        lessonsModule.content.map((element) => {
                            return <CourseModules
                                key={element._id}
                                module={element.module}
                                moduleContent={element.moduleContent}
                                moduleId={element._id}
                            />
                        })}
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;
