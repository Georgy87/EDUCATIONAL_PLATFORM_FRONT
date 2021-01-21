import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGetCourseForTraining } from '../../store/ducks/courses/actions';
import { selectCourseForTraining, selectLoadingTraining } from '../../store/ducks/courses/selectors';
import { LeaningCourseModules } from './leaningCourseModules/LeaningCourseModules';

import "./MyLeaningPage.css";

export const MyLeaningPage: React.FC = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoadingTraining);
    const course = useSelector(selectCourseForTraining);

    const params: { id?: string } = useParams();
    const id = params.id;

    useEffect(() => {
        if (id) {
            dispatch(fetchGetCourseForTraining(id));
        }
    }, []);

    return (
        <div className="leaning">
            {loading && course?.map(el => {
                return (
                    <LeaningCourseModules
                        key={el._id}
                        module={el.module}
                        moduleHours={el.moduleHours}
                        moduleMinutes={el.moduleMinutes}
                        moduleSeconds={el.moduleSeconds}
                        moduleContent={el.moduleContent}
                        moduleId={el._id}
                    />
                )
            })}
        </div>
    )
}
