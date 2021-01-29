import React from "react";
import { useDispatch } from "react-redux";
import { LinksToResourcesType } from "../../../store/ducks/contentCourses/reducer";
import { setCourseVideos, setVideoForPleerByClick } from "../../../store/ducks/courses/actions";
import Dropdown from "react-bootstrap/Dropdown";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import "./LessonsContainer.css";

export type PropsLessonsType = {
    links: LinksToResourcesType[];
    lessonId: string;
    lessonTime: string;
    fileVideo: string;
    lesson: string;
    moduleId: string;
    countVideo?: number;
    linkFlag: boolean;
    styleLessons: any;
}

export const LessonsBlockContainer: React.FC<PropsLessonsType> = ({ children, ...props }) => {
    const { lesson, fileVideo, lessonTime, countVideo, links, linkFlag, styleLessons } = props;

    const dispatch = useDispatch();

    const arr: string[] = fileVideo.split("23489238748923dskdjh2");
    const newLessonTime = lessonTime.slice(2);

    const setVideoName = (video: string) => {
        window.localStorage.setItem('lesson-name', video);
        dispatch(setVideoForPleerByClick(video));
    }

    React.useEffect(() => {
        dispatch(setCourseVideos({ video: arr, indexLesson: countVideo }));
        dispatch(setVideoForPleerByClick(String(window.localStorage.getItem('lesson-name'))));
        // if (!window.localStorage.getItem('lesson-name')) {
        // 	dispatch(setCourseVideos({ video: arr, indexLesson: countVideo }));
        // }
    }, []);
    return (
        <div>
            {children}
            <div>
                {/* <Link to="header" spy={true} smooth={true} offset={50} duration={500}> */}
                <div className="lessons-leaning-wrapper" onClick={() => setVideoName(fileVideo)}>
                    <div style={styleLessons}>
                        <PlayCircleFilledIcon color="action" style={{ marginRight: 7, marginBottom: 3 }} />
                        {lesson}
                        <div className="lessons-time">
                            {newLessonTime} мин
					    </div>
                    </div>
                    <div className="lessons-leaning-right-wrapper">
                        {linkFlag && <Dropdown>
                            <Dropdown.Toggle
                                variant="info"
                                id="dropdown-basic"
                                style={{ backgroundColor: '#49c5b6', border: 'none', outlineStyle: 'none' }}
                            >
                                Ресурсы
						</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {links.map((el) => {
                                    return (
                                        <div>
                                            <Dropdown.Item href={el.linksToResources}>
                                                {el.linkName}
                                            </Dropdown.Item>
                                        </div>
                                    );
                                })}
                            </Dropdown.Menu>
                        </Dropdown>}
                    </div>
                </div>
                {/* </Link> */}
            </div>
        </div>
    )
}