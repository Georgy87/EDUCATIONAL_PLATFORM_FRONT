import React from "react";
import { NavLink } from "react-router-dom";
import { deleteCourse } from "../../../store/ducks/courses/saga";

import { useDispatch } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector } from "react-redux";
import { getProfileCourse } from "../../../store/ducks/courseProfile/saga";

import "./CourseItems.css";

const CourseItems = ({ props }) => {
    // const state = useSelector(state => state.directions.filterByDirection);
    // console.log(state);
    const dispatch = useDispatch();
    const onDeleteCourse = (e) => {
        e.stopPropagation();
        dispatch(deleteCourse(props._id, props.photo));
    };

    return (
        <div>
            <div className="course-container" onClick={() => dispatch(getProfileCourse(props._id))}>
                <NavLink to={`/profile/${props._id}`}>
                    <div className="course-show">
                        <img
                            src={`http://localhost:5000/${props.photo}`}
                            alt=""
                        />
                    </div>
                </NavLink>
                <div className="course-descr">
                    <div className="course-title">{props.smallDescription}</div>
                    <div className="course-author">{props.author}</div>
                </div>
                <div className="course-delete">
                    <DeleteForeverIcon onClick={(e) => onDeleteCourse(e)} />
                </div>
            </div>
            <div className="course-line"></div>
        </div>
    );
};

export default CourseItems;
