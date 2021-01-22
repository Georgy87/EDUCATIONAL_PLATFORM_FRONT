import React, { useEffect } from 'react';
import { LinksToResourcesType } from '../../../store/ducks/contentCourses/reducer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useDispatch } from 'react-redux';
import { setCourseVideos } from '../../../store/ducks/courses/actions';

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
	const dispatch = useDispatch();
	let [countVideo, setCountVideo] = React.useState<number>(0);

	const arr: string[] = fileVideo.split("23489238748923dskdjh2");

	const setVideoName = (video: string) => {
		console.log(video);
	}

	useEffect(() => {
		if (window.localStorage.getItem('lesson')) {
			setCountVideo(Number(window.localStorage.getItem('lesson')));
		}
		dispatch(setCourseVideos({ video: arr, indexLesson: countVideo }));
	}, []);

	const onNextVideo = () => {
		countVideo = countVideo + 1;
		setCountVideo(countVideo);
		//@ts-ignore
		window.localStorage.setItem('lesson', countVideo);
		dispatch(setCourseVideos({ video: arr, indexLesson: countVideo }));
	}

	const onPrevVideo = () => {
		if (countVideo > 0) {
			countVideo = countVideo - 1;
			setCountVideo(countVideo);
			//@ts-ignore
			window.localStorage.setItem('lesson', countVideo);
			dispatch(setCourseVideos({ video: arr, indexLesson: countVideo }));
		}
	}

	return (
		<div className="lessons-leaning-wrapper" onClick={() => setVideoName(fileVideo)}>
			<PlayCircleFilledIcon color="action" style={{ marginRight: 7, marginBottom: 3 }} />
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


