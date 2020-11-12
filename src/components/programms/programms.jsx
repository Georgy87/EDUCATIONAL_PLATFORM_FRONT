import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilesDirections } from "../../actions/files";
import SearchIcon from '@material-ui/icons/Search';

import "./programms.css";
const Programms = () => {
    const state = useSelector((state) => state.files.filesDirections);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFilesDirections());
    }, []);

    return (
        <div>
            <div className="programms">
                <h1>Все программы</h1>
                <div className="programms-line"></div>
                <div className="directions">
                    <div className="directions-titles">
                    <label htmlFor="">
                        <input type="text" placeholder="Search" />
                    </label>
                        <div className="directions-item">
                            <button>Instagram-маркетолог</button>
                        </div>
                        <div className="directions-item">
                            <button>Smm</button>
                        </div>
                        <div className="directions-item">
                            <button>Сторисмейкер</button>
                        </div>
                        <div className="directions-item">
                            <button>Копирайтер</button>
                        </div>
                        <div className="directions-item">
                            <button>Менеджер блогера</button>
                        </div>
                        <div className="directions-item">
                            <button>Визуальщик</button>
                        </div>
                        <div className="directions-item">
                            <button>Продюсер</button>
                        </div>
                        <div className="directions-item">
                            <button>Контентмейкер</button>
                        </div>
                    </div>
                    <div className="directions-content">
                        <h1 style={{ fontSize: "40px" }}>Профессии</h1>
                        <div className="items">
                            <div className="item">
                                {state.map((el) => {
                                    return (
                                        <div key={el._id}className="courses-wrap">
                                            <img
                                                src={`http://localhost:5000/${el.name}`}
                                            />
                                            <div className="title">{el.direction}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programms;
