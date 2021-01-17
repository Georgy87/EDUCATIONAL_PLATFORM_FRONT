import React from "react";
import { useSelector } from "react-redux";
import { ModuleContentType } from "../../../store/ducks/contentCourses/reducer";
import { selectCourseModule, selectLessonTime, selectVideoName } from "../../../store/ducks/contentCourses/selectors";
import { MediaPlayer } from "../../courseVideoPleer/CourseVideoPleer";
import CourseModules from "./courseModules/CourseModules";

import "./CoursePreview.css";

type PropsType = {
    changeCourseId: string | null;
}

const CoursePreview: React.FC<PropsType> = ({ changeCourseId }) => {
    const lessonsModule = useSelector(selectCourseModule);
    const videoName = useSelector(selectVideoName);

    const lessonTime = useSelector(selectLessonTime);

    return (
        <div>
            <div className="teacher-course-preview">
                <MediaPlayer
                    videoName={videoName}
                    lessonId={lessonTime?.lessonId}
                    courseId={lessonTime?.courseId}
                    moduleId={lessonTime?.moduleId}
                />
                <div className="teacher-course-list">
                    {lessonsModule?.content.map((element) => {
                            return (
                                <CourseModules
                                    courseId={changeCourseId}
                                    key={element._id}
                                    module={element.module}
                                    moduleHours={element.moduleHours}
                                    moduleMinutes={element.moduleMinutes}
                                    moduleSeconds={element.moduleSeconds}
                                    moduleContent={element.moduleContent}
                                    moduleId={element._id}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;
