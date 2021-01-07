import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import "./ProfileMaterialsLessons.css";

const ProfileMaterialsLessons = (props) => {
    return (
        <>
            <div className="material-lesson-wrapper">
                <PlayCircleFilledIcon color="action" style={{marginRight: 7}}/>
                <div className="material-lesson-item">{props.lesson}</div>
                <div className="material-lesson-time">{props.lessonTime}</div>
            </div>
        </>
    );
};
export default ProfileMaterialsLessons;
