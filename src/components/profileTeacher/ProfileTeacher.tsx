import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/ducks/courseProfile/actions";
import { RouteComponentProps } from 'react-router-dom';
import { selectTeacherInfo, selectTeacherLoaded } from '../../store/ducks/courseProfile/selectors';
import ProfileTeacherCourses from "./profileTeacherCourses/ProfileTeacherCourses";
import photo from "../../assets/avatar/unnamed.jpg";

import "./ProfileTeacher.css";

interface MatchParams {
    teacherId: string;
    photo: string;
}

interface Props extends RouteComponentProps<MatchParams> { }

const ProfileTeacher: React.FC<Props> = (props): React.ReactElement => {
    const teacherInfo = useSelector(selectTeacherInfo);
    const loaded = useSelector(selectTeacherLoaded);

    const dispatch = useDispatch();

    let teacherId = props.match.params.teacherId;
    console.log(teacherId);
    let avatar = photo;

    if(teacherInfo) {
        avatar = `http://localhost:5000/${teacherInfo?.avatar}`;
    }

    useEffect(() => {
        dispatch(actions.fetchGetTeacher(teacherId));
    }, []);

    return (
        <div>
            <div className="profile-teacher-container">
                <div className="profile-teacher-wrapper">
                    <h1>Преподаватель</h1>
                    <div>{`${teacherInfo?.name} ${teacherInfo?.surname}`}</div>
                    <h3>Немного о себе</h3>
                    <p>{teacherInfo?.competence}</p>
                    <h4>Все курсы</h4>
                    <div className="profile-teacher-courses">
                        {teacherInfo?.courses.map(course => {
                            return <ProfileTeacherCourses
                                key={course._id}
                                photo={course.photo}
                                price={course.price}
                                author={course.author}
                                description={course.smallDescription}
                                loaded={loaded}
                            />
                        })}
                    </div>

                </div>
                <div className="profile-teacher-avatar">
                    <img src={avatar} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default ProfileTeacher;
