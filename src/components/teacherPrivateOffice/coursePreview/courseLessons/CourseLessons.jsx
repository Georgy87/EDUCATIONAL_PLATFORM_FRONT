import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteLesson,
    lessonTitleRevision,
    sendLinksToResources,
} from "../../../../actions/contentCourses";
import { setVideoName } from "../../../../reducers/contentCoursesReducer";

const CourseLessons = (props) => {
    const [status, setStatus] = useState(false);
    const [statusValue, setStatusValue] = useState(props.lesson);
    const [linksToResources, setLinksToResources] = useState('');
    const [linkName, setlinksName] = useState('');

    const courseId = useSelector(state => state.course.courses[0]._id);

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
    }

    const onChangeLinkName = (e) => {
        setlinksName(e.target.value);
    }

    const sendLink = (courseId, lessonId) => {
        dispatch(sendLinksToResources(linksToResources, courseId, lessonId, linkName));
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <div>{props.module}</div>
            <div onClick={() => dispatch(setVideoName(props.fileVideo))}>
                {status === false ? (
                    <div>
                        <div>{props.lesson}</div>
                        <button onClick={onChangeStatus}>Редактировать</button>
                    </div>
                ) : (
                    <div>
                        <input
                            type="text"
                            defaultValue={statusValue}
                            onChange={onChangeValue}
                            onBlur={() => onChangeBlurStatus(props.id)}
                        />
                        {/* <button>Сохранить</button> */}
                    </div>
                )}
            </div>
            <button onClick={() => dispatch(deleteLesson(props.id, props.fileVideo))}>
                Удалить урок
            </button>
            <div>
                <div>Добавить название ссылки на ресурс</div>
                <input type="text"  onChange={onChangeLinkName}/>

                <div>Добавить ссылку на ресурс</div>
                <input type="text"  onChange={onChangeLink}/>

                <button onClick={() => sendLink(courseId, props.id, linkName)}>Добавить ссылку</button>
            </div>
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
