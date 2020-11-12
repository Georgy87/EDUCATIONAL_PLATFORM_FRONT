import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFiles } from "../../actions/files";
import SimpleSlider from "../SliderCourses/SliderCourses";
import Programms from "../programms/Programms";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Courses from '../courses/Courses';

const MainPage = () => {
    const state = useSelector((state) => state.files.files);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFiles());
    }, []);

    return (
        <div>
            <BrowserRouter>
                <SimpleSlider props={state} />
                    <Switch>
                        <Route exact path="/main" component={Programms } />
                        <Route exact path="/courses" component={Courses } />
                    </Switch>
                <Redirect to="/main" />
            </BrowserRouter>
        </div>
    );
};

export default MainPage;
