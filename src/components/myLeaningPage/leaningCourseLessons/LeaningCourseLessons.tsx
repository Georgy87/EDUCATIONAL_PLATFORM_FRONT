import React, { useEffect } from 'react';
import { LinksToResourcesType } from '../../../store/ducks/contentCourses/reducer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useDispatch, useSelector } from 'react-redux';
import { setCourseVideos, setVideoForPleer, setVideoForPleerByClick } from '../../../store/ducks/courses/actions';
import { selectVideoForPleer } from '../../../store/ducks/courses/selectors';

import "./LeaningCourseLessons.css";

type PropsType = {
	links: LinksToResourcesType[];
	lessonId: string;
	lessonTime: string;
	fileVideo: string;
	lesson: string;
	moduleId: string;
	countVideo: number;
}

const LeaningCourseLessons: React.FC<PropsType> = ({ lesson, fileVideo, lessonTime, countVideo }) => {
	const dispatch = useDispatch();

	const arr: string[] = fileVideo.split("23489238748923dskdjh2");
	const newLessonTime = lessonTime.slice(2);

	const setVideoName = (video: string) => {
		window.localStorage.setItem('lesson-name', video);
		dispatch(setVideoForPleerByClick(video));
	}

	useEffect(() => {
		dispatch(setCourseVideos({ video: arr, indexLesson: countVideo }));
		dispatch(setVideoForPleerByClick(String(window.localStorage.getItem('lesson-name'))));
	}, []);

	return (
		<div>
			<div className="lessons-leaning-wrapper" onClick={() => setVideoName(fileVideo)}>
				<PlayCircleFilledIcon color="action" style={{ marginRight: 7, marginBottom: 3 }} />
				{lesson}
				<div className="lessons-time">
					{newLessonTime} мин
				</div>
				<div>{countVideo}</div>
			</div>
		</div>
	)
}

export default LeaningCourseLessons;


