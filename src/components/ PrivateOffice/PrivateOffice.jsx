import React from "react";
import { useDispatch } from "react-redux";
import { uploadFiles } from "../../actions/files";
import { useState } from "react";

const PrivateOffice = () => {

    const [file, setFile] = useState("");
    const [profession, setProfession] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <input
                type="text"
                defaultValue={profession}
                onChange={(e) => setProfession(e.target.value)}
            />
            <input
                type="text"
                defaultValue={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
            />
            <input
                type="text"
                defaultValue={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
            />
            <button onClick={() => dispatch(uploadFiles(file, profession, shortDescription))}>On</button>
        </div>
    );
};

export default PrivateOffice;
