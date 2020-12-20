import React from "react";
import "./Courses.css";
import { useDispatch, useSelector } from "react-redux";
import CourseItems from "./CourseItems/CourseItems";
import photo from "../../assets/Снимок экрана 2020-11-12 в 22.24.33.png"
import { useEffect } from "react";
import { filterByDirection } from "../../store/ducks/directions/saga";
// import { filterByDirection } from "../../actions/directions";

const Courses = (props) => {
    const state = useSelector(state => state.directions.filterByDirection);

    let courseFilterId = props.match.params.filter;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterByDirection(courseFilterId));
    }, []);
    return (
        <div>
            <div className="course-wrap">
                <div className="course-photo">
                    {/* <img src={photo} alt=""/> */}
                </div>
                <h1>Все курсы по направлению </h1>
                <input type="text" placeholder="Search" />
                <div className="courses">
                    {state.map((el) => {
                        return <CourseItems key={el._id} props={el} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Courses;
