import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import photo from "../../../../assets/avatar/unnamed.jpg";
import { NavLink } from 'react-router-dom';
import { actions } from "../../../../store/ducks/courseProfile/actions";
import { selectCourseProfile, selectTeacherLoaded } from "../../../../store/ducks/courseProfile/selectors";

import { MaterialsBlockContainer } from "../../../../hocs/materials/modules/ModulesContainer";

import "./ProfileCourseMaterials.css";

type PropsType = {
    fullDescription: string | false | undefined;
}

const ProfileCourseMaterials: React.FC<PropsType> = ({ fullDescription }): React.ReactElement => {
    const [collapseText, setCollapsetext] = useState<string>("");
    const profile = useSelector(selectCourseProfile);
    const loaded = useSelector(selectTeacherLoaded);
    const dispatch = useDispatch();

    let avatar = photo;

    if (profile) {
        avatar = `http://localhost:5000/${profile?.avatar}`;
    }

    return (
        <>
            <div>
                <h1>Материалы курса</h1>
                {profile?.content.map((element) => {
                    return (
                        <MaterialsBlockContainer
                            key={element._id}
                            module={element.module}
                            moduleHours={element.moduleHours}
                            moduleMinutes={element.moduleMinutes}
                            moduleSeconds={element.moduleSeconds}
                            moduleContent={element.moduleContent}
                            moduleId={element._id}
                            links={false}
                            pageName="profile"
                        />
                    );
                })}
                <div className="course-description-container">
                    <h1>Описание</h1>
                    <div
                        className={`course-description-wrapper ${collapseText}`}
                    >
                        <div className="course-description">
                            {profile?.fullDescription}
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
                            <NavLink to={`/profile-teacher/${profile?.user}`} onClick={() => dispatch(actions.fetchGetTeacher(profile?.user))}>
                                <img src={avatar} alt="" />
                            </NavLink>
                        </div>
                        <div className="course-description-teacher-competence">
                            {profile?.competence}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCourseMaterials;
