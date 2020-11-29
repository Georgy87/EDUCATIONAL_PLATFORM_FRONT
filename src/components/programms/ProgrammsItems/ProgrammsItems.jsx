import React from "react";
import { useDispatch } from "react-redux";
import { deleteDirection, filterByDirection } from "../../../actions/directions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { NavLink } from "react-router-dom";
import "./ProgrammsItems.css"
import { useEffect } from "react";

const ProgrammsItems = ({ props }) => {
    const dispatch = useDispatch();
  
    const nameDirection = () => {
        dispatch(filterByDirection(props.direction));
    };
    return (
        <div>
            <div className="direction-wrap" >
                <NavLink to={`/courses/${props.direction}`} onClick={nameDirection}>
                    <img src={`http://localhost:5000/${props.name}`} />
                </NavLink>
                <div className="title">{props.direction}</div>
                <div className="direction-delete">
                    <DeleteForeverIcon onClick={() => dispatch(deleteDirection(props._id, props.direction))}/>
                </div>
            </div>
        </div>
    );
};

export default ProgrammsItems;
