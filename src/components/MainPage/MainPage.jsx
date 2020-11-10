import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFiles } from '../../actions/files';
import SliderCourses from '../SliderCourses/SliderCourses';

const MainPage = () => {
    const state = useSelector(state => state.files.files);
    console.log(state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFiles());
    }, []);
    return (
        <div>
            {/* <div>{state.user ? state.user.email : ''}</div>
            <div>{state.user ? state.user.name : ''}</div> */}
            <SliderCourses />
        </div>
    )
}

export default MainPage
