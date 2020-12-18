import React from "react";
import { useSelector } from "react-redux";
import ProfileMaterialsModules from "./profileMaterialsModules/ProfileMaterialsModules";
import "./ProfileCourseMaterials.css";

const ProfileCourseMaterials = () => {
    const materialsCourse = useSelector(
        (state) => state.courseProfile.courseProfile
    );
    return (
        <>
            <div className="material-container">
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
            </div>
            <div>
                <h1>Описание</h1>
                {/* <div>{props.fullDescription}</div> */}
            </div>
        </>
    );
};
export default ProfileCourseMaterials;
