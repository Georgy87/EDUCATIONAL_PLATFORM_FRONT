import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDirections } from "../../actions/directions";
import SearchIcon from "@material-ui/icons/Search";

import "./programms.css";
import ProgrammsItems from "./ProgrammsItems/ProgrammsItems";
import DirectionTitles from "./DirectionsTitles/DirectionTitles";
const Programms = () => {
    const state = useSelector((state) => state.directions.courseDirections);

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
                        {state.map(el => {
                            return  <DirectionTitles key={el._id} direction={el.direction}/>
                        })}
                    </div>
                    <div className="directions-content">
                        <h1 style={{ fontSize: "40px" }}>Профессии</h1>
                        <div className="items">
                            <div className="item">
                                {state.map((el) => {
                                    return <ProgrammsItems key={el._id} props={el}/>;
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
