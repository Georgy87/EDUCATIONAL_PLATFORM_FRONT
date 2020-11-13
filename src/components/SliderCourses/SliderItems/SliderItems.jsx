import React from "react";

const SliderItems = ({ props }) => {
    return (
        <div>
            <div className="my-settings-slider">
                <img
                    style={{
                        width: "250px",
                        height: "150px",
                        backgroundPosition: "center",
                        margin: "0 auto",
                        borderRadius: "4px",
                    }}
                    src={`http://localhost:5000/${props.name}`}
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
