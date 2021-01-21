import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGetCourseForTraining } from '../../store/ducks/courses/actions';

import "./MyLeaningPage.css";

export const MyLeaningPage = () => {
    const dispatch = useDispatch();
    const params: { id?: string } = useParams();

    const id = params.id;

    useEffect(() => {
        if (id) {
            dispatch(fetchGetCourseForTraining(id));
        }
    });
    
    return (
        <div className="leaning">
            {`MyLeaningPage ${id}`}
        </div>
    )
}
