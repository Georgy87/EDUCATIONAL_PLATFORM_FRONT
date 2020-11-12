import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFiles} from "../../actions/files";
import SimpleSlider from "../SliderCourses/SliderCourses";
import Programms from "../programms/programms";

const MainPage = () => {
    const state = useSelector((state) => state.files.files);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getFiles());
    }, []);

    return (
        <div>
            <SimpleSlider props={state} />
            <Programms />
        </div>
    );
};

export default MainPage;
