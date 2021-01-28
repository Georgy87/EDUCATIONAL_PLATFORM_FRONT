import React, { useEffect } from 'react';
import { LinksToResourcesType } from '../../../store/ducks/contentCourses/reducer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useDispatch, useSelector } from 'react-redux';
import { setCourseVideos, setVideoForPleer, setVideoForPleerByClick } from '../../../store/ducks/courses/actions';
import { selectVideoForPleer } from '../../../store/ducks/courses/selectors';
import { Link, animateScroll as scroll } from "react-scroll";
import Dropdown from "react-bootstrap/Dropdown";

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

const LeaningCourseLessons: React.FC<PropsType> = ({ lesson, fileVideo, lessonTime, countVideo, links }) => {
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
		// if (!window.localStorage.getItem('lesson-name')) {
		// 	dispatch(setCourseVideos({ video: arr, indexLesson: countVideo }));
		// }
	}, []);

	return (
		<div>
			{/* <Link to="header" spy={true} smooth={true} offset={50} duration={500}> */}
				<div className="lessons-leaning-wrapper" onClick={() => setVideoName(fileVideo)}>
					<div className="lessons-leaning-left-wrapper">
						<PlayCircleFilledIcon color="action" style={{ marginRight: 7, marginBottom: 3 }} />
						{lesson}
						<div className="lessons-time">
							{newLessonTime} мин
					</div>
					</div>
					<div className="lessons-leaning-right-wrapper">
						<Dropdown>
							<Dropdown.Toggle
								variant="info"
								id="dropdown-basic"
								style={{ backgroundColor: '#49c5b6', border: 'none', outlineStyle: 'none' }}
							>
								Ресурсы
						</Dropdown.Toggle>
							<Dropdown.Menu>
								{links.map((el) => {
									return (
										<div>
											<Dropdown.Item href={el.linksToResources}>
												{el.linkName}
											</Dropdown.Item>
										</div>
									);
								})}
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			{/* </Link> */}
		</div>
	)
}

export default LeaningCourseLessons;


