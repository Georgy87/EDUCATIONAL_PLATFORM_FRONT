import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGetCourseForTraining, setVideoForPleer } from '../../store/ducks/courses/actions';
import { selectCourseForTraining, selectLoadingTraining } from '../../store/ducks/courses/selectors';
import { LeaningCourseModules } from './leaningCourseModules/LeaningCourseModules';
import { CircularProgress } from '@material-ui/core';

import "./MyLeaningPage.css";

export const MyLeaningPage: React.FC = () => {
    const dispatch = useDispatch();

    let [countVideo, setCountVideo] = React.useState<number>(0);

    const loading = useSelector(selectLoadingTraining);
    const course = useSelector(selectCourseForTraining);

    const params: { id?: string } = useParams();
    const id = params.id;

    const setNextVideo = () => {
		countVideo = countVideo + 1;
		setCountVideo(countVideo);
		//@ts-ignore
		dispatch(setVideoForPleer(countVideo));
	}

	const setPrevVideo = () => {
		if (countVideo > 0) {
			countVideo = countVideo - 1;
			setCountVideo(countVideo);
			//@ts-ignore
			dispatch(setVideoForPleer(countVideo))
		}
	}

    useEffect(() => {
        if (id) {
            dispatch(fetchGetCourseForTraining(id));
        }
    }, []);

    return (
        <div className="leaning">
            <div>dsdfsdf</div>
            <button onClick={setPrevVideo}>Prev</button>
            <button onClick={setNextVideo}>Next</button>
            {loading ? course?.map((el) => {
                return (
                    <LeaningCourseModules
                        key={el._id}
                        countVideo={countVideo}
                        module={el.module}
                        moduleHours={el.moduleHours}
                        moduleMinutes={el.moduleMinutes}
                        moduleSeconds={el.moduleSeconds}
                        moduleContent={el.moduleContent}
                        moduleId={el._id}
                    />
                )
            }) : (
                <CircularProgress style={{ display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50 }} />
            )}
        </div>
    )
}
