import React from "react";

const DirectionTitles = (props) => {
    const { direction } = props;
    return (
        <div>
            <div className="directions-item">
                <button>{direction}</button>
            </div>
        </div>
    );
};

export default DirectionTitles;
