import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchUploadCourseDirections } from "../../store/ducks/directions/actions";
import { Button } from "../button/Button";

import "./PrivateOfficeAdmin.css";

const PrivateOfficeAdmin: React.FC = (): React.ReactElement => {
    const [directionName, setDirectionName] = useState<string>("");
    const [photoDirection, setFile] = useState<any>();

    const dispatch = useDispatch();

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) {
            throw new Error("Error finding e.target.files");
        }
        return setFile(e.target.files[0]);
    }

    const onFetchUploadCourseDirections = () => {
        dispatch(fetchUploadCourseDirections({ file: photoDirection, direction: directionName }));
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
                style={{ fontWeight: 300 }}
                defaultValue={directionName}
                onChange={(e) => setDirectionName(e.target.value)}
            />
            <Button typeStyle="primary" type={undefined} action={onFetchUploadCourseDirections}>Добавить направление</Button>
        </div>
    );
};

export default PrivateOfficeAdmin;
