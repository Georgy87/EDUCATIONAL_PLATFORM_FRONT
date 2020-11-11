import React from "react";
import photo1 from "../../assets/Снимок экрана 2020-11-11 в 18.10.17.png";
import photo2 from "../../assets/Снимок экрана 2020-11-11 в 18.10.30.png";
import photo3 from "../../assets/Снимок экрана 2020-11-11 в 18.10.52.png";
import photo4 from "../../assets/Снимок экрана 2020-11-11 в 18.11.00.png";
import "./programms.css";
const Programms = () => {
    return (
        <div>
            <div className="programms">
                <h1>Все программы</h1>
                <div className="programms-line"></div>
                <div className="directions">
                    <div className="directions-titles">
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
                        <h1 style={{fontSize: "40px"}}>Профессии</h1>
                        <div className="items">
                            <div className="item">
                                <img src={photo1} alt="" />
                            </div>
                            <div className="item">
                                <img src={photo2} alt="" />
                            </div>
                        </div>
                        <div className="items">
                            <div className="item">
                                <img src={photo3} alt="" />
                            </div>
                            <div className="item">
                                <img src={photo4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programms;
