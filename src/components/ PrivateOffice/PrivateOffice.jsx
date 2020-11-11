import React from "react";
import { useDispatch } from "react-redux";
import { uploadFiles } from "../../actions/files";
import { useState } from "react";
import "./PrivateOffice.css";

const PrivateOffice = () => {
    const [file, setFile] = useState("");
    const [profession, setProfession] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <div className="office">
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="custom-file-input"
                />
                <textarea
                    type="text"
                    defaultValue={profession}
                    onChange={(e) => setProfession(e.target.value)}
                />
                <textarea
                    type="text"
                    defaultValue={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    type="text"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button
                    className="office-items"
                    onClick={() =>
                        dispatch(
                            uploadFiles(file, profession, author, price)
                        )
                    }
                >
                    Готово
                </button>
            </div>
        </div>
    );
};

export default PrivateOffice;
