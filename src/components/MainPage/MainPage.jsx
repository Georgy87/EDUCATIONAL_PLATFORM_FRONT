import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCourses } from "../../actions/courses";
import SimpleSlider from "../sliderCourses/SliderCourses";
import Programms from "../programms/Programms";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Courses from "../courses/Courses";
import ProgrammsItems from "../programms/ProgrammsItems/ProgrammsItems";

const MainPage = () => {
    const state = useSelector((state) => state.course.courses);
    //files
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, []);

    return (
        <div>
            <SimpleSlider props={state} />
            <Programms />
        </div>
    );
};

export default MainPage;
