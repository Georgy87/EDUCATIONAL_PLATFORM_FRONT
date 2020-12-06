import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteLesson,
    lessonTitleRevision,
    sendLinksToResources,
    uploadLesson,
} from "../../../../actions/contentCourses";
import { setVideoName } from "../../../../reducers/contentCoursesReducer";
import EditIcon from "@material-ui/icons/Edit";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import Dropdown from "react-bootstrap/Dropdown";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

    const classes = useStyles();
    const [status, setStatus] = useState(false);
    const [statusValue, setStatusValue] = useState(props.lesson);
    const [linksToResources, setLinksToResources] = useState("");
    const [linkName, setlinksName] = useState("");

    console.log(props);

    const courseId = useSelector((state) => state.course.courses[0]._id);

    const dispatch = useDispatch();

    const onChangeStatus = () => {
        setStatus(true);
    };

    const onChangeValue = (e) => {
        setStatusValue(e.target.value);
    };

    const onChangeBlurStatus = (id) => {
        setStatus(false);
        dispatch(lessonTitleRevision(statusValue, id));
    };

    const onChangeLink = (e) => {
        setLinksToResources(e.target.value);
    };

    const onChangeLinkName = (e) => {
        setlinksName(e.target.value);
    };

    const sendLink = (courseId, lessonId) => {
        dispatch(
            sendLinksToResources(linksToResources, courseId, lessonId, linkName)
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
                                                dispatch(
                                                    setVideoName(
                                                        props.fileVideo
                                                    )
                                                )
                                            }
                                        >
                                            <div className="editing-lesson">
                                                {status === false ? (
                                                    <div className="lesson-title">
                                                        <div>
                                                            {props.lesson}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="lesson-title">
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                statusValue
                                                            }
                                                            onChange={
                                                                onChangeValue
                                                            }
                                                            onBlur={() =>
                                                                onChangeBlurStatus(
                                                                    props.id
                                                                )
                                                            }
                                                        />
                                                        {/* <button>Сохранить</button> */}
                                                    </div>
                                                )}

                                                <EditIcon
                                                    onClick={onChangeStatus}
                                                />
                                                <RestoreFromTrashIcon
                                                    onClick={() =>
                                                        dispatch(
                                                            deleteLesson(
                                                                props.id,
                                                                props.fileVideo
                                                            )
                                                        )
                                                    }
                                                >
                                                    Удалить урок
                                                </RestoreFromTrashIcon>
                                            </div>
                                        </div>
                                        <div className="lesson-editing-links">
                                            <div className="add-title-links">
                                                Добавить название ссылки на
                                                ресурс.
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
                                                        courseId,
                                                        props.id,
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
                                                        console.log(el);
                                                    }
                                                    return (
                                                        <div>
                                                            <Dropdown.Item
                                                                href={el.link}
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
