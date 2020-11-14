import React from "react";
import "./Courses.css";
import { useSelector } from "react-redux";
import CourseItems from "./CourseItems/CourseItems";
import photo from "../../assets/Снимок экрана 2020-11-12 в 22.42.46.png"
const Courses = () => {
    const state = useSelector(state => state.directions.filterByDirection);
    //courses
    return (
        <div>
            <div className="course-wrap">
                <div className="course-photo">
                    <img src={photo} alt=""/>
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
