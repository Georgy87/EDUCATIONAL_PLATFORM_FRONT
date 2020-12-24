import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileMaterialsModules from "./profileMaterialsModules/ProfileMaterialsModules";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import photo from "../../../../assets/avatar/unnamed.jpg";
import { NavLink } from 'react-router-dom';
import { getTeahcer } from "../../../../store/ducks/courseProfile/saga";

import "./ProfileCourseMaterials.css";

const ProfileCourseMaterials = ({ fullDescription }) => {
    const [collapseText, setCollapsetext] = useState("");
    const materialsCourse = useSelector((state) => state.courseProfile.courseProfile);

    const dispatch = useDispatch();

    const teacherInfo = useSelector(state => state.courseProfile);


    let avatar = photo;
    let competence;
    let teacherId;

    if(teacherInfo.courseProfile) {
        avatar = `http://localhost:5000/${teacherInfo.courseProfile.avatar}`;
        competence = teacherInfo.courseProfile.competence;
        teacherId = teacherInfo.courseProfile.user;
    }

    // useEffect(() => {
    //     setCollapsetext("");
    // }, []);

    return (
        <>
            <div>
                <h1>Материалы курса</h1>
                {materialsCourse &&
                    materialsCourse.content.map((element) => {
                        return (
                            <ProfileMaterialsModules
                                key={element._id}
                                module={element.module}
                                moduleHours={element.moduleHours}
                                moduleMinutes={element.moduleMinutes}
                                moduleSeconds={element.moduleSeconds}
                                moduleContent={element.moduleContent}
                                moduleId={element._id}
                            />
                        );
                    })}
                <div className="course-description-container">
                    <h1>Описание</h1>
                    <div
                        className={`course-description-wrapper ${collapseText}`}
                    >
                        <div className="course-description">
                            {fullDescription}
                        </div>
                    </div>
                    <div>
                        {collapseText === "" ? (
                            <div className="roll-in-description">
                                <div>
                                    <ExpandMoreIcon />
                                </div>
                                <div
                                    className="course-description-text"
                                    onClick={() => setCollapsetext(" height")}
                                >
                                    Развернуть
                                </div>
                            </div>
                        ) : (
                            <div className="roll-up-description">
                                <div>
                                    <ExpandLessIcon />
                                </div>
                                <div
                                    className="course-description-text"
                                    onClick={() => setCollapsetext("")}
                                >
                                    Свернуть
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="course-description-teacher-wrapper">
                        <h1>Преподаватель</h1>
                        <div className="course-description-teacher-info">
                            <NavLink to={`/profile-teacher/${teacherId}`} onClick={() => dispatch(getTeahcer(teacherId))}>
                                <img src={avatar} alt=""/>
                            </NavLink>
                        </div>
                        <div className="course-description-teacher-competence">
                            {competence}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCourseMaterials;
