import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import "./ReplyToCommentPage.css";
import { fetchGetCourseForTraining, fetchGetReplyToComment, GetReplyToComment } from '../../../store/ducks/courses/actions';
import { useEffect } from 'react';
import { selectCourseForTrainingId } from '../../../store/ducks/courses/selectors';
import { useParams } from 'react-router-dom';

export const ReplyToCommentPage = () => {
    const dispatch = useDispatch();

    const params: { id: string } = useParams();

    const id = params.id;

    useEffect(() => {
        if (id && window.localStorage.getItem("course-comment-id")) {
            const courseId: any = window.localStorage.getItem("course-comment-id");
            dispatch(fetchGetCourseForTraining(courseId));
            dispatch(fetchGetReplyToComment({courseId: courseId, commentId: id}))
        }
    }, []);
    
    return (
        <div>
            Reply To Comment
        </div>
    )
}
