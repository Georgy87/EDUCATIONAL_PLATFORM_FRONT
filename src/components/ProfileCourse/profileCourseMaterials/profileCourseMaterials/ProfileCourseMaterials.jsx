import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileMaterialsModules from "./profileMaterialsModules/ProfileMaterialsModules";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./ProfileCourseMaterials.css";

const ProfileCourseMaterials = ({ fullDescription }) => {
    const [collapseText, setCollapsetext] = useState("");
    const materialsCourse = useSelector(
        (state) => state.courseProfile.courseProfile
    );

    useEffect(() => {
        setCollapsetext("");
    }, []);

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
                </div>
            </div>
        </>
    );
};
export default ProfileCourseMaterials;
