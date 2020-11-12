import React from "react";
import "./Courses.css";
import { useSelector } from "react-redux";
import CourseItems from "./CourseItems/CourseItems";
const Courses = () => {
    const state = useSelector((state) => state.files.filterByDirection);

    return (
        <div>
            <div className="course-wrap">
                <h1>Все курсы</h1>
                <input type="text" placeholder="Search" />
                <div className="courses">
                    {state.map((el) => {
                        return <CourseItems key={el._id} props={el} />;
                    })}
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default Courses;
