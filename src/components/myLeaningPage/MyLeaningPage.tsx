import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGetCourseForTraining, setVideoForPleer } from '../../store/ducks/courses/actions';
import { selectCourseForTraining, selectLoadingTraining, selectVideoForPleer, selectLessonsList } from '../../store/ducks/courses/selectors';
import { LeaningCourseModules } from './leaningCourseModules/LeaningCourseModules';
import { CircularProgress } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//@ts-ignore
import ReactWebMediaPlayer from 'react-web-media-player';

import "./MyLeaningPage.css";

export const MyLeaningPage: React.FC = () => {
    const videoForPleer = useSelector(selectVideoForPleer);
    const lessonsList = useSelector(selectLessonsList);

    const dispatch = useDispatch();

    let [countVideo, setCountVideo] = React.useState<number>(0);
    const [activeTab, setActiveTab] = React.useState<number>(0);

    const loading = useSelector(selectLoadingTraining);
    const course = useSelector(selectCourseForTraining);

    const params: { id?: string } = useParams();
    const id = params.id;

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        event.stopPropagation();
        event.preventDefault();
        setActiveTab(newValue);
    };


    const setNextVideo = () => {
        countVideo = countVideo + 1;
        if (countVideo >= lessonsList.length) {
            countVideo = 0;
        }
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
    let photo: any;
    useEffect(() => {

        if (id) {
            dispatch(fetchGetCourseForTraining(id));
        }
    }, []);
    if (window.localStorage.getItem('lesson-name') === null) {

        photo = "https://images.unsplash.com/photo-1611300494368-a84f7109804c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80";
    }

    return (
        <div className="leaning">
            <div className="leaning-pleer">
                <ReactWebMediaPlayer
                    style={{ display: 'block', margin: '0 auto', marginLeft: '-70px', top: '-130px' }}
                    title="Платформа"
                    width={1450}
                    height={500}
                    video={`http://localhost:5000/${videoForPleer}`}
                    thumbnail={photo}
                />
            </div>
            <div className="leaning-btns-wrapper">
                <button className="leaning-prev-btn" onClick={setPrevVideo}>Prev</button>
                <button className="leaning-next-btn" onClick={setNextVideo}>Next</button>
            </div>
            <div className="leaning-tabs-for-page">
                <Tabs value={activeTab} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                    <Tab label="Материалы курса" />
                    <Tab label="Вопросы и ответы" />
                    <Tab label="Примечания" />
                    <Tab label="Обьявления" />
                </Tabs>
            </div>

            <div className="leaning-modules-section">
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
        </div>
    )
}
