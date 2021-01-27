import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGetComments, fetchGetCourseForTraining } from '../../../store/ducks/courses/actions';
import { fetchGetCourseForTrainingRequest } from '../../../store/ducks/courses/saga';

export const CourseCommentPage: React.FC = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState<number>(0)
    const params: { id?: string} = useParams();
    const id = params.id;

    useEffect(() => {
        console.log('hello');
        if (id) {
            dispatch(fetchGetComments(id));
        }
    }, [id]);
    return (
        <div>
            commentывадывжадылвжадлыжвдалыжвадлыжвдалыжвдалыждвал
        </div>
    )
}
