import React from "react";
import { useDispatch } from "react-redux";
import { filterByDirection } from "../../../actions/courses";
import { NavLink } from "react-router-dom";

const ProgrammsItems = ({ props }) => {
    const dispatch = useDispatch();
    const nameDirection = () => {
        dispatch(filterByDirection(props.direction));
    };
    return (
        <div>
            <div className="direction-wrap" onClick={nameDirection}>
                <NavLink to="/courses">
                    <img src={`http://localhost:5000/${props.name}`} />
                </NavLink>
                <div className="title">{props.direction}</div>
            </div>
        </div>
    );
};

export default ProgrammsItems;
