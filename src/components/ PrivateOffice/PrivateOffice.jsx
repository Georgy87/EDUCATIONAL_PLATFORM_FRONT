import React from "react";
import { useDispatch } from "react-redux";
import { uploadFiles, uploadFilesDirections } from "../../actions/files";
import { useState } from "react";
import "./PrivateOffice.css";
import { NavLink } from "react-router-dom";

const PrivateOffice = () => {
    const [file, setFile] = useState("");
    const [profession, setProfession] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");

    const [direction, setDirection] = useState("");
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
                    placeholder="Профессия"
                    type="text"
                    defaultValue={profession}
                    onChange={(e) => setProfession(e.target.value)}
                />
                <textarea
                    placeholder="Автор курса"
                    type="text"
                    defaultValue={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    placeholder="Цена курса"
                    type="text"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <NavLink style={{ textDecoration: "none" }} to="/main">
                    <button
                        className="office-items"
                        onClick={() =>
                            dispatch(
                                uploadFiles(file, profession, author, price)
                            )
                        }
                    >
                        Добавить профессию
                    </button>
                </NavLink>
            </div>

            <div className="office">
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="custom-file-input"
                />
                <textarea
                    placeholder="Направление"
                    type="text"
                    defaultValue={direction}
                    onChange={(e) => setDirection(e.target.value)}
                />

                <NavLink style={{ textDecoration: "none" }} to="/main">
                    <button
                        className="office-items"
                        onClick={() =>
                            dispatch(uploadFilesDirections(file, direction))
                        }
                    >
                        Добавить направление
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default PrivateOffice;
