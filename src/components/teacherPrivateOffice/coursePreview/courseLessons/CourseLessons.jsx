import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteLesson,
    lessonTitleRevision,
    sendLinksToResources,
    uploadLesson,
} from "../../../../actions/contentCourses";
import {
    setTimeLesson,
    setVideoName,
} from "../../../../reducers/contentCoursesReducer";
import EditIcon from "@material-ui/icons/Edit";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import Dropdown from "react-bootstrap/Dropdown";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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

const CourseLessons = (props) => {
    const [status, setStatus] = useState(false);
    const [statusValue, setStatusValue] = useState(props.lesson);
    const [linksToResources, setLinksToResources] = useState("");
    const [linkName, setlinksName] = useState("");

    const courseId = props.courseId;
    console.log(courseId);
    const dispatch = useDispatch();

    const onChangeStatus = () => {
        setStatus(true);
    };

    const onChangeValue = (e) => {
        setStatusValue(e.target.value);
    };

    const onChangeBlurStatus = (moduleId, lessonId) => {
        setStatus(false);
        dispatch(
            lessonTitleRevision(statusValue, courseId, moduleId, lessonId)
        );
    };

    const onChangeLink = (e) => {
        setLinksToResources(e.target.value);
    };

    const onChangeLinkName = (e) => {
        setlinksName(e.target.value);
    };

    const sendLink = (moduleId, lessonId) => {
        dispatch(
            sendLinksToResources(
                courseId,
                moduleId,
                lessonId,
                linkName,
                linksToResources
            )
        );
    };

    const setVideoAndTimeLesson = (videoName) => {
        dispatch(setVideoName(videoName));
        dispatch(setTimeLesson(courseId, props.moduleId, props.lessonId));
    };

    const onDeleteLesson = () => {
        const hours = Number(props.lessonTime.split(":")[0]);
        const minutes = Number(props.lessonTime.split(":")[1]);
        const seconds = Number(props.lessonTime.split(":")[2]);
        dispatch(
            deleteLesson(
                courseId,
                props.moduleId,
                props.lessonId,
                props.fileVideo,
                hours,
                minutes,
                seconds
            )
        );
    };

    return (
        <>
            <div className="lesson-container">
                <div>
                    <div className="lesson-content">
                        <div className="lesson-wrapper">
                            <div className="lesson-content">
                                <div
                                    onClick={() =>
                                        setVideoAndTimeLesson(props.fileVideo)
                                    }
                                >
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
                                                    onChange={onChangeValue}
                                                    onBlur={() =>
                                                        onChangeBlurStatus(
                                                            props.moduleId,
                                                            props.lessonId
                                                        )
                                                    }
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
                                        onChange={onChangeLinkName}
                                    />

                                    <div className="add-links">
                                        Добавить ссылку на ресурс.
                                    </div>
                                    <input
                                        type="text"
                                        onChange={onChangeLink}
                                    />

                                    <button
                                        onClick={() =>
                                            sendLink(
                                                props.moduleId,
                                                props.lessonId,
                                                linkName
                                            )
                                        }
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
                                            {
                                                // console.log(el);
                                            }
                                            return (
                                                <div>
                                                    <Dropdown.Item
                                                        href={
                                                            el.linksToResources
                                                        }
                                                    >
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

// status === false ? (
//     <div onClick={onChangeClickStatus} className="profile-status">
//         {!props.status ? "Введите статус" : props.status}
//     </div>
// ) : (
//     <input
//         autoFocus={true}
//         onChange={onChangeValue}
//         defaultValue={statusValue}
//         onBlur={onChangeBlurStatus}
//         type="text"
//     />
// );
