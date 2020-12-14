import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadCourseDirections } from "../../store/ducks/directions/saga";
import "./PrivateOffice.css";

const PrivateOffice = () => {
    const [directionName, setDirectionName] = useState("");
    const [photoDirection, setFile] = useState("");

    const dispatch = useDispatch();

    return (
        <div className="office">
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="custom-file-input"
            />
            <textarea
                placeholder="Профессия"
                type="text"
                defaultValue={directionName}
                onChange={(e) => setDirectionName(e.target.value)}
            />
            <button onClick={() => dispatch(uploadCourseDirections(photoDirection, directionName))}>Добавить направление</button>
        </div>
    );
};

export default PrivateOffice;
