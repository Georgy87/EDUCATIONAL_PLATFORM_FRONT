import React from "react";
import "./programms.css";
const Programms = () => {
    return (
        <div>
            <div className="programms">
                <h1>Все программы</h1>
                <div className="programms-line"></div>
                <div className="directions">
                    <div className="directions-titles">
                        <div className="directions-item"><button>Instagram-маркетолог</button></div>
                        <div className="directions-item"><button></button></div>
                        <div className="directions-item"><button></button></div>
                        <div className="directions-item"><button></button></div>
                        <div className="directions-item"><button></button></div>
                        <div className="directions-item"><button></button></div>
                    </div>
                    <div className="directions-content">
                        <div className="items">
                            <div className="item">Все направления</div>
                            <div className="item">Все направления</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programms;
