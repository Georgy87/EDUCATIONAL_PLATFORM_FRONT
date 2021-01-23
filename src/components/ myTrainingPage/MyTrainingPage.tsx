import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPurchasedCourses, selectPurchasedCoursesLoading } from '../../store/ducks/user/selectors';
import { fetchGetPurchasedCourses } from '../../store/ducks/user/actions';
import { MyTrainingCourses } from './MyTrainingCourses/MyTrainingCourses';
import { CircularProgress } from '@material-ui/core';

import "./MyTrainingPage.css";

const MyTrainingPage: React.FC = (): React.ReactElement => {
    const courses = useSelector(selectPurchasedCourses);
    const loading = useSelector(selectPurchasedCoursesLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetPurchasedCourses());
    }, []);
    
    return (
        <div className="training">
            <div className="training-header">
                <h2>Мое обучение</h2>
            </div>
                <div className="training-wrapper">
                    {loading ? courses?.map(el =>
                    (
                        <MyTrainingCourses
                            key={el.id}
                            photo={el.photo}
                            author={el.author}
                            smallDescription={el.smallDescription}
                            id={el.id}
                        />
                    ))
                        :
                        (
                            <CircularProgress style={{display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50}} />
                        )}
                </div>
        </div>
    )
}
export default MyTrainingPage;
