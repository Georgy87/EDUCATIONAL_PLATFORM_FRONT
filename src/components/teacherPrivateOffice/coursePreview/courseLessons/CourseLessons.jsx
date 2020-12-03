import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteLesson,
    lessonTitleRevision,
    sendLinksToResources,
} from "../../../../actions/contentCourses";
import { setVideoName } from "../../../../reducers/contentCoursesReducer";
import EditIcon from "@material-ui/icons/Edit";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import Dropdown from "react-bootstrap/Dropdown";

import "./CourseLessons.css";

const CourseLessons = (props) => {
    const [status, setStatus] = useState(false);
    const [statusValue, setStatusValue] = useState(props.lesson);
    const [linksToResources, setLinksToResources] = useState("");
    const [linkName, setlinksName] = useState("");

    const courseId = useSelector((state) => state.course.courses[0]._id);
    const links = useSelector((state) => state.course.content);
    console.log(links);

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
    console.log(props.module != "");
    let moduleStyle;
    if (props.module != "") {
        moduleStyle = {
            height: "60px",
            backgroundColor: "rgb(240, 243, 240)",
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
        };
    }

    return (
        <div className="lesson-container">
            <div style={moduleStyle} className="module-wrapper">
                <div className="module">{props.module}</div>
            </div>
            <div className="lesson-wrapper">
                <div className="lesson-content">
                    <div
                        onClick={() => dispatch(setVideoName(props.fileVideo))}
                    >
                        <div className="editing-lesson">
                            {status === false ? (
                                <div className="lesson-title">
                                    <div>{props.lesson}</div>
                                </div>
                            ) : (
                                <div className="lesson-title">
                                    <input
                                        type="text"
                                        defaultValue={statusValue}
                                        onChange={onChangeValue}
                                        onBlur={() =>
                                            onChangeBlurStatus(props.id)
                                        }
                                    />
                                    {/* <button>Сохранить</button> */}
                                </div>
                            )}

                            <EditIcon onClick={onChangeStatus} />
                            <RestoreFromTrashIcon
                                onClick={() =>
                                    dispatch(
                                        deleteLesson(props.id, props.fileVideo)
                                    )
                                }
                            >
                                Удалить урок
                            </RestoreFromTrashIcon>
                        </div>
                    </div>
                    <div className="lesson-editing-links">
                        <div className="add-title-links">
                            Добавить название ссылки на ресурс
                        </div>
                        <input type="text" onChange={onChangeLinkName} />

                        <div className="add-links">
                            Добавить ссылку на ресурс
                        </div>
                        <input type="text" onChange={onChangeLink} />

                        <button
                            onClick={() =>
                                sendLink(courseId, props.id, linkName)
                            }
                        >
                            Добавить ссылку
                        </button>
                    </div>
                </div>
                <div className="lesson-resources">
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Ресурсы
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {props.links.map((el) => {
                                {console.log(el)}
                                return <div>
                                    <Dropdown.Item href={el.link}>
                                        {el.linkName}
                                    </Dropdown.Item>
                                </div>

                            })}

                            {/*
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <hr />
        </div>

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
