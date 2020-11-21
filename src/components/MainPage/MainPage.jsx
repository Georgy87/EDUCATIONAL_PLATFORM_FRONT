import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCourses } from "../../actions/courses";
import SimpleSlider from "../sliderCourses/SliderCourses";
import Programms from "../programms/Programms";
import "./MainPage.css"
import TeacherRegistration from '../teacherRegistration/TeacherRegistration';

const MainPage = () => {
    const state = useSelector((state) => state.course.courses);
    //files
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, []);

    return (
        <div>
            <div className="main-background">hello</div>
            <SimpleSlider props={state} />
            <Programms />
            <TeacherRegistration/>
            <div className="teacher-background"></div>
        </div>
    );
};

export default MainPage;
