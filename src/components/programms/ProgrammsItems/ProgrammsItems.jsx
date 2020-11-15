import React from "react";
import { useDispatch } from "react-redux";
import { deleteDirection, filterByDirection } from "../../../actions/directions";
import { NavLink } from "react-router-dom";

const ProgrammsItems = ({ props }) => {
    const dispatch = useDispatch();
    const nameDirection = () => {
        dispatch(filterByDirection(props.direction));
    };
    return (
        <div>
            <div className="direction-wrap" >
                <NavLink to="/courses" onClick={nameDirection}>
                    <img src={`http://localhost:5000/${props.name}`} />
                </NavLink>
                <div className="title">{props.direction}</div>
                <DeleteForeverIcon onClick={() => dispatch(deleteDirection(props._id, props.direction))} onClick={(e) => onDeleteFile(e)} />
            </div>
        </div>
    );
};

export default ProgrammsItems;
