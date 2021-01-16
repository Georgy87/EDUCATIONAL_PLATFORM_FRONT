import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgrammsItems from "./ProgrammsItems/ProgrammsItems";
import DirectionTitles from "./DirectionsTitles/DirectionTitles";
import { getCourseDirections } from "../../store/ducks/directions/saga";
import { selectCourseDirections } from "../../store/ducks/directions/selectors";

import "./programms.css";

const Programms: React.FC = () => {
    const directions = useSelector(selectCourseDirections);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourseDirections());
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
                        {directions.map(el => {
                            return <DirectionTitles key={el._id} direction={el.direction} />
                        })}
                    </div>
                    <div className="directions-content">
                        <h1 style={{ fontSize: "40px" }}>Профессии</h1>
                        <div className="items">
                            <div className="item">
                                {directions.map((el) => {
                                    return <ProgrammsItems key={el._id} name={el.name} direction={el.direction} _id={el._id} />;
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