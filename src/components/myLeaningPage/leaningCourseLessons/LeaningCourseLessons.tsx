import React, { useEffect } from 'react';
import { LinksToResourcesType } from '../../../store/ducks/contentCourses/reducer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import "./LeaningCourseLessons.css";

type PropsType = {
    links: LinksToResourcesType[];
    lessonId: string;
    lessonTime: string;
    fileVideo: string;
    lesson: string;
    moduleId: string;
}

const LeaningCourseLessons: React.FC<PropsType> = ({ lesson, fileVideo, lessonTime }) => {
    const newLessonTime = lessonTime.slice(2);

    let [countVideo, setCountVideo] = React.useState<number>(0);

    const setVideoName = (video: string) => {
        console.log(video);
    }

    useEffect(() => {
        console.log(fileVideo);
    }, []);

    const onNextVideo = () => {
        console.log(lesson)

        countVideo = countVideo + 1;
        setCountVideo(countVideo);
    }

    const onPrevVideo = () => {
        if (countVideo > 0) {
            countVideo = countVideo - 1;
            setCountVideo(countVideo);
        }
    }

    return (
        <div className="lessons-leaning-wrapper" onClick={() => setVideoName(fileVideo)}>
              <PlayCircleFilledIcon color="action" style={{marginRight: 7, marginBottom: 3}}/>
            {lesson}
            <div className="lessons-time">
                {newLessonTime} мин
            </div>
            <button onClick={onNextVideo}>Next</button>
            <button onClick={onPrevVideo}>Prev</button>
            <div>{countVideo}</div>
        </div>
    )
}

export default LeaningCourseLessons;


