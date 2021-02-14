import React from "react";

import "./SliderItems.css";

const SliderItems = ({ props }) => {
    return (
        <div>
            <div className="my-settings-slider">
                <img
                    style={{
                        width: "100%",
                        height: "180px",
                        backgroundPosition: "center",
                        margin: "0 auto",
                    }}
                    src={`http://localhost:5000/${props.photo}`}
                    alt=""
                />
                <div className="my-settings-slider-items">
                    <div
                        className="my-settings-slider-item"
                        style={{ fontWeight: "Bold" }}
                    >
                        {props.profession}
                    </div>
                    <div className="my-settings-slider-item-descr">
                        {props.author}
                    </div>
                    <div className="my-settings-slider-item">{`Цена: ${props.price} руб`}</div>
                </div>
            </div>
        </div>
    );
};

export default SliderItems;
