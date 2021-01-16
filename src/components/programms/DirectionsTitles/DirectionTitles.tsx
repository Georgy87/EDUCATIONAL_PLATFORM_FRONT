import React from "react";

type PropsType = {
    direction: string;
}

const DirectionTitles: React.FC<PropsType> = ({ direction }) => {
    return (
        <div>
            <div className="directions-item">
                <button>{direction}</button>
            </div>
        </div>
    );
};

export default DirectionTitles;
