import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgrammsItems from "./ProgrammsItems/ProgrammsItems";
import DirectionTitles from "./DirectionsTitles/DirectionTitles";
import { fetchGetCourseDirections } from "../../store/ducks/directions/actions";
import { selectCourseDirections } from "../../store/ducks/directions/selectors";

import "./programms.css";

const Programms: React.FC = () => {
    const directions = useSelector(selectCourseDirections);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetCourseDirections());
    }, []);
    return (
        <div>
            <div className="programms">
                <h1>Профессии</h1>
                <div className="programms-line"></div>
                <div className="directions">

                    {/* <h1 style={{ fontSize: "40px" }}>Профессии</h1> */}
                    <div className="directions-item">
                        {directions.map((el) => {
                            return <ProgrammsItems key={el._id} name={el.name} direction={el.direction} _id={el._id} />;
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Programms;
