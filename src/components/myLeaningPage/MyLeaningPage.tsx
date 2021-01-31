import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchGetCourseForTraining, setCourseVideos, setVideoForPleer, setVideoForPleerByClick, GetReplyToComment, fetchGetComments } from '../../store/ducks/courses/actions';
import { selectCourseForTraining, selectLoadingTraining, selectVideoForPleer, selectLessonsList, selectCourseForTrainingId } from '../../store/ducks/courses/selectors';
import { CircularProgress } from '@material-ui/core';
import { CourseCommentPage } from './courseCommentPage/CourseCommentPage';
import { MaterialsBlockContainer } from "../../hocs/materials/modules/ModulesContainer";
import { ReplyToCommentPage } from './replyToCommentPage/ReplyToCommentPage';
//@ts-ignore
import ReactWebMediaPlayer from 'react-web-media-player';

import "./MyLeaningPage.css";
import { WSAEINVALIDPROCTABLE } from 'constants';


export const MyLeaningPage: React.FC = () => {
    const videoForPleer = useSelector(selectVideoForPleer);
    const lessonsList = useSelector(selectLessonsList);

    const dispatch = useDispatch();

    let [countVideo, setCountVideo] = React.useState<number>(0);

    const loading = useSelector(selectLoadingTraining);
    const course = useSelector(selectCourseForTraining);
    const courseId = useSelector(selectCourseForTrainingId);

    const params: { id: any} = useParams();
    const id = params.id;

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
    let video = '';

    // Доработать!!!!

    if (videoForPleer != null && videoForPleer != undefined) {
        video = videoForPleer;
    } else {
        video = '14.  js с нуля, ваще с нуля (addEventListener, события, events).mp4'
    }

    useEffect(() => {
        if (id && window.location.pathname === `/purchased-courses/leaning/${id}` || window.location.pathname === `/purchased-courses/leaning/materials/${id}`) {
            window.localStorage.setItem("course-comment-id", id);
            dispatch(fetchGetCourseForTraining(id));
        }
    }, []);

    if (window.localStorage.getItem('lesson-name') === null) {
        photo = "https://images.unsplash.com/photo-1611300494368-a84f7109804c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80";
    }

    const onHandlerMaterials = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.stopPropagation();
        // event.preventDefault();
    }

    return (
        <div className="leaning">
            <div className="leaning-pleer">
                <ReactWebMediaPlayer
                    style={{ display: 'block', margin: '0 auto', marginLeft: '-70px', top: '-130px' }}
                    title="Платформа"
                    width={1450}
                    height={500}
                    video={`http://localhost:5000/${video}`}
                    thumbnail={photo}
                />
            </div>
            <div className="leaning-btns-wrapper">
                <button className="leaning-prev-btn" onClick={setPrevVideo}>Prev</button>
                <button className="leaning-next-btn" onClick={setNextVideo}>Next</button>
            </div>
            <div className="leaning-tabs-for-page">
                <NavLink to={`/purchased-courses/leaning/materials/${courseId}`} onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => onHandlerMaterials(event)}>
                    <div>Материалы курсы</div>
                </NavLink>
                <NavLink to={`/purchased-courses/leaning/comments/${courseId}`}>
                    <div onClick={() =>  dispatch(fetchGetComments(id))}>Комментарии</div>
                </NavLink>
            </div>
            <div className="leaning-modules-section">
                <Route exact
                    path={['/purchased-courses/leaning/:id', `/purchased-courses/leaning/materials/:id`]}
                >
                    {loading ? course?.map((el) => {
                        return (
                            <MaterialsBlockContainer
                                key={el._id}
                                countVideo={countVideo}
                                module={el.module}
                                moduleHours={el.moduleHours}
                                moduleMinutes={el.moduleMinutes}
                                moduleSeconds={el.moduleSeconds}
                                moduleContent={el.moduleContent}
                                moduleId={el._id}
                                pageName="leaning"
                                links={true}
                            />
                        )
                    }) : (
                            <CircularProgress style={{ display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50 }} />
                        )}
                </Route>
                <Route exact path={`/purchased-courses/leaning/comments/:id?`} render={() => <CourseCommentPage />} />
                <Route exact path={`/purchased-courses/leaning/comments/reply-to-comment/:id?`} render={() => <ReplyToCommentPage />} />
            </div>
        </div>
    )
}




