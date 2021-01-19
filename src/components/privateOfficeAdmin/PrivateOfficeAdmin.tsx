import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUploadCourseDirections } from "../../store/ducks/directions/actions";

import "./PrivateOfficeAdmin.css";

const PrivateOfficeAdmin: React.FC = (): React.ReactElement => {
    const [directionName, setDirectionName] = useState<string>("");
    const [photoDirection, setFile] = useState<any>();

    const dispatch = useDispatch();

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null ) {
            throw new Error("Error finding e.target.files");
        }

        return setFile(e.target.files[0]);

    }

    return (
        <div className="office">
            <input
                type="file"
                onChange={onChangeFile}
                className="custom-file-input"
            />
            <textarea
                placeholder="Профессия"
                style={{fontWeight: 300}}
                defaultValue={directionName}
                onChange={(e) => setDirectionName(e.target.value)}
            />
            <button onClick={() => dispatch(fetchUploadCourseDirections({file: photoDirection, direction: directionName}))}>Добавить направление</button>
        </div>
    );
};

export default PrivateOfficeAdmin;
