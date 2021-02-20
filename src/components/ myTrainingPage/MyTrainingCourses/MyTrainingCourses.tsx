import React from 'react';
import { NavLink } from 'react-router-dom';

import "./MyTrainingCourses.css";

type PropsType ={
    _id: string;
    photo: string;
    author: string;
    smallDescription: string;
}

export const MyTrainingCourses: React.FC<PropsType> = ({ photo, author, smallDescription, _id}) => {
    const onDeleteLessonStorage = () => {
        window.localStorage.removeItem('lesson-name');
    }

    return (
        <div className="training-cart-wrapper">
            <NavLink to={`/purchased-courses/leaning/${_id}`} onClick={onDeleteLessonStorage}>
                <img src={`http://localhost:5000/${photo}`} alt=""/>
            </NavLink>
                <div className="training-descr-wrapper">
                    <h2>{smallDescription}</h2>
                    <p>{author}</p>
                </div>
        </div>
    )
}
