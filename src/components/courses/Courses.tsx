import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItems from "./CourseItems/CourseItems";
import photo from "../../assets/Снимок экрана 2020-11-12 в 22.24.33.png"
import { useEffect } from "react";
import { fetchFilterByDirection } from "../../store/ducks/directions/actions";
import { selectFilterByDirection } from "../../store/ducks/directions/selectors";
import { useParams } from "react-router-dom";

import "./Courses.css";

const Courses: React.FC = () => {
    const state = useSelector(selectFilterByDirection);
    const params: { filter: string } = useParams();
    console.log(params.filter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilterByDirection(params.filter));
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
                        return <CourseItems
                            key={el._id}
                            id={el._id}
                            photo={el.photo}
                            author={el.author}
                            smallDescription={el.smallDescription} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Courses;
