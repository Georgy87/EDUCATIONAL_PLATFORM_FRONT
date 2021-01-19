import React from "react";
import { NavLink } from "react-router-dom";
import { fetchDeleteCourse } from "../../../store/ducks/courses/actions";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { actions } from "../../../store/ducks/courseProfile/actions";

import "./CourseItems.css";

type PropsType = {
    id: string;
    photo: string;
    author: string;
    smallDescription: string;
}

const CourseItems: React.FC<PropsType> = ({ id, photo, author, smallDescription }) => {

    const dispatch = useDispatch();

    const onDeleteCourse = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        dispatch(fetchDeleteCourse({courseId: id, photo}));
    };

    return (
        <div>
            <div className="course-container" onClick={() => dispatch(actions.fetchGetProfileCourse(id))}>
                <NavLink to={`/profile/${id}`}>
                    <div className="course-show">
                        <img
                            src={`http://localhost:5000/${photo}`}
                            alt=""
                        />
                    </div>
                </NavLink>
                <div className="course-descr">
                    <div className="course-title">{smallDescription}</div>
                    <div className="course-author">{author}</div>
                </div>
                <div className="course-delete" onClick={(e: React.MouseEvent<HTMLElement>) => onDeleteCourse(e)}>
                    <DeleteForeverIcon />
                </div>
            </div>
            <div className="course-line"></div>
        </div>
    );
};

export default CourseItems;
