import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCourses } from "../../store/ducks/courses/saga";
import SimpleSlider from "../sliderCourses/SliderCourses";
import Programms from "../programms/programms";
import TeacherRegistration from "../teacherRegistration/TeacherRegistration";
import { selectCourseLoading, selectCourses, selectLoadingState } from "../../store/ducks/courses/selectors";

import "./MainPage.css";

const MainPage = () => {
    const courses = useSelector(selectCourses);
    const isLoading = useSelector(selectCourseLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, []);

    return (
        <div>
            <div className="main-background"></div>
            <SimpleSlider stateCourses={courses} isLoading={isLoading}/>
            <Programms />
            <TeacherRegistration />
        </div>
    );
};

export default MainPage;
