import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeahcer } from "../../store/ducks/courseProfile/saga";
import { RouteComponentProps } from 'react-router-dom';
import { selectTeacher, selectTeacherInfo, selectTeacherLoaded } from '../../store/ducks/courseProfile/selectors';
import ProfileTeacherCourses from "./profileTeacherCourses/ProfileTeacherCourses";
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

    useEffect(() => {
        dispatch(getTeahcer(teacherId));
    }, []);

    return (
        <div>
            <div className="profile-teacher-container">
                <div className="profile-teacher-wrapper">
                    <h1>Преподаватель</h1>
                    <div>{loaded && `${teacherInfo?.name} ${teacherInfo?.surname}`}</div>
                    <h3>Немного о себе</h3>
                    <p>{loaded && teacherInfo?.competence}</p>
                    <h4>Все курсы</h4>
                    <div className="profile-teacher-courses">
                        {loaded && teacherInfo?.courses.map(course => {
                            console.log(course.smallDescription)
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
                    {loaded && <img src={`http://localhost:5000/${loaded && teacherInfo?.avatar}`} alt="" />}
                </div>
            </div>

        </div>
    );
};

export default ProfileTeacher;
