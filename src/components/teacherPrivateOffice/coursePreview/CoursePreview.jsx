import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoName } from "../../../reducers/contentCoursesReducer";
import { MediaPlayer } from '../../courseVideoPleer/CourseVideoPleer';
import "./CoursePreview.css";

const CoursePreview = () => {
    const lessons = useSelector((state) => state.contentCourses.courseContent);
    const videoName = useSelector((state) => state.contentCourses.videoName);
    const dispatch = useDispatch();

    const contentCourse = useSelector(
        (state) => state.contentCourses.courseContent
    );
    return (
        <div>
            <div className="teacher-course-preview">
                <MediaPlayer videoName={videoName} />
                <div className="teacher-course-list">
                    {contentCourse &&
                        lessons.content.map((el) => {
                            console.log(el.module);
                            return (
                                <div>
                                    <div>{el.module}</div>
                                    <div
                                        onClick={() =>
                                            dispatch(setVideoName(el.fileVideo))
                                        }
                                    >
                                        <div>{el.lesson}</div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;