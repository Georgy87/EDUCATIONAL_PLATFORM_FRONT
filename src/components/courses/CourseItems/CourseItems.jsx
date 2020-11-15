import React from "react";
import "./CourseItems.css";
import { NavLink } from "react-router-dom";
import { deleteCourse } from "../../../actions/courses";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector } from "react-redux";

const CourseItems = ({ props }) => {
    // const state = useSelector(state => state.directions.filterByDirection);
    // console.log(state);
    const dispatch = useDispatch();
    const onDeleteFile = (e) => {
        e.stopPropagation();
        dispatch(deleteCourse(props._id, props.name));
    };
    return (
        <div>
            <div className="course-container">
                <NavLink to="/profile">
                    <div className="course-show">
                        <img
                            src={`http://localhost:5000/${props.name}`}
                            alt=""
                        />
                    </div>
                </NavLink>
                <div className="course-descr">
                    <div className="course-title">{props.smallDescription}</div>
                    <div className="course-author">{props.author}</div>
                </div>
                <div className="course-delete">
                    <DeleteForeverIcon onClick={(e) => onDeleteFile(e)} />
                    {/* <img src="https://www.pngkey.com/png/full/11-111133_delete-trash-icon-waste.png" alt=""/> */}
                </div>
            </div>
            <div className="course-line"></div>
        </div>
    );
};

export default CourseItems;
