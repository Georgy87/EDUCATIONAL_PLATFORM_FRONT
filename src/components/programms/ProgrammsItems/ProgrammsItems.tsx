import React from "react";
import { useDispatch } from "react-redux";
import { fetchDeleteDirection } from "../../../store/ducks/directions/actions";
import { fetchFilterByDirection } from "../../../store/ducks/directions/actions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { NavLink } from "react-router-dom";

import "./ProgrammsItems.css"

type PropsType = {
    direction: string;
    name: string;
    _id: string;
}
const ProgrammsItems: React.FC<PropsType> = ({ direction, name, _id }) => {
    const dispatch = useDispatch();

    const nameDirection = () => {
        dispatch(fetchFilterByDirection(direction));
    };
    return (
        <div>
            <div className="direction-wrap">
                <NavLink to={`/courses/${direction}`} onClick={nameDirection}>
                    <img src={`http://localhost:5000/${name}`} />
                </NavLink>
                <div className="title">{direction}</div>
                <div className="direction-delete">
                    <DeleteForeverIcon onClick={() => dispatch(fetchDeleteDirection({directionId: _id, direction}))}/>
                </div>
            </div>
        </div>
    );
};

export default ProgrammsItems;
