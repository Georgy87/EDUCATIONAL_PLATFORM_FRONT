import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSendLinksToResources } from "../../../../store/ducks/contentCourses/actions";
import { fetchDeleteLesson, fetchLessonTitleRevision, setTimeLesson, setVideoName } from "../../../../store/ducks/contentCourses/actions";
import EditIcon from "@material-ui/icons/Edit";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import Dropdown from "react-bootstrap/Dropdown";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { LinksToResourcesType } from "../../../../store/ducks/contentCourses/reducer";

import "./CourseLessons.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

type PropsType = {
    courseId: string;
    links: LinksToResourcesType[];
    lessonId: string;
    lessonTime: string;
    fileVideo: string;
    lesson: string;
    moduleId: string;
}

const CourseLessons: React.FC<PropsType> = (props) => {
    const [status, setStatus] = useState<Boolean>(false);
    const [statusValue, setStatusValue] = useState<string>("");
    const [linksToResources, setLinksToResources] = useState<string>("");
    const [linkName, setlinksName] = useState<string>("");

    const courseId = props.courseId;
    const dispatch = useDispatch();

    const onChangeStatus = () => {
        setStatus(true);
    };

    const onChangeBlurStatus = (moduleId: string, lessonId: string) => {
        setStatus(false);
        dispatch(fetchLessonTitleRevision({newTitle: statusValue, courseId, moduleId, lessonId}));
    };

    const sendLink = (moduleId: string, lessonId: string, linkName: string) => {
        dispatch(fetchSendLinksToResources({courseId, moduleId, lessonId, linkName, linksToResources}));
    };

    const setVideoAndTimeLesson = (videoName: string) => {
        dispatch(setVideoName(videoName));
        dispatch(setTimeLesson(courseId, props.moduleId, props.lessonId));
    };

    const onDeleteLesson = () => {
        const hours = Number(props.lessonTime.split(":")[0]);
        const minutes = Number(props.lessonTime.split(":")[1]);
        const seconds = Number(props.lessonTime.split(":")[2]);
        dispatch(fetchDeleteLesson({courseId, moduleId: props.moduleId, lessonId: props.lessonId, videoName: props.fileVideo, hours, minutes, seconds}));
    };

    return (
        <>
            <div className="lesson-container">
                <div>
                    <div className="lesson-content">
                        <div className="lesson-wrapper">
                            <div className="lesson-content">
                                <div onClick={() => setVideoAndTimeLesson(props.fileVideo)}>
                                    <div className="editing-lesson">
                                        {status === false ? (
                                            <div className="lesson-title">
                                                <div className="lesson-title-item">{props.lesson}</div>
                                                <div className="lesson-title-item"><AccessTimeIcon/>{`${props.lessonTime}`}</div>
                                            </div>
                                        ) : (
                                            <div className="lesson-title">
                                                <input
                                                    type="text"
                                                    defaultValue={statusValue}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatusValue(e.target.value)}
                                                    onBlur={() => onChangeBlurStatus(props.moduleId, props.lessonId)}
                                                />
                                                {/* <button>Сохранить</button> */}
                                            </div>
                                        )}

                                        <EditIcon onClick={onChangeStatus} />
                                        <RestoreFromTrashIcon
                                            onClick={() => onDeleteLesson()}
                                        >
                                            Удалить урок
                                        </RestoreFromTrashIcon>
                                    </div>
                                </div>
                                <div className="lesson-editing-links">
                                    <div className="add-title-links">
                                        Добавить название ссылки на ресурс.
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setlinksName(e.target.value)}
                                    />

                                    <div className="add-links">
                                        Добавить ссылку на ресурс.
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLinksToResources(e.target.value)}
                                    />

                                    <button
                                        onClick={() => sendLink(props.moduleId, props.lessonId, linkName)}
                                    >
                                        Добавить ссылку
                                    </button>
                                </div>
                            </div>
                            <div className="lesson-resources">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="info"
                                        id="dropdown-basic"
                                    >
                                        Ресурсы
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {props.links.map((el) => {
                                            return (
                                                <div>
                                                    <Dropdown.Item href={el.linksToResources}>
                                                        {el.linkName}
                                                    </Dropdown.Item>
                                                </div>
                                            );
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseLessons;

