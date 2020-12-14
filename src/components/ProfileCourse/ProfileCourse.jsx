import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Modal from "./modal/Modal";
import { getProfileCourse } from "../../store/ducks/courseProfile/saga";

import "./ProfileCourse.css";

const ProfileCourse = (props) => {
    const profile = useSelector((state) => state.courseProfile.courseProfile);
    const video = useSelector((state) => state.courseProfile);
    const [modalActive, setModalActive] = useState(false);
    
    let profileId = props.match.params.profileId;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileCourse(profileId));
    }, []);
    return (
        <div>
            {profile && (
                <div className="profile-container">
                    <div className="profile-info-main">
                        <div className="small-description">
                            <h1> {profile.smallDescription}</h1>
                            <p>{`Автор: ${profile.author}`}</p>
                        </div>
                    </div>
                    <div className="profile-info-middle"></div>
                    <div className="profile-info-dop">
                        <div
                            className="info-dop-container"
                            onClick={() => setModalActive(true)}
                        >
                            <img src={`http://localhost:5000/${profile.photo}`} />
                            <div className="info-dop-content">
                                <PlayCircleFilledIcon
                                    style={{
                                        width: 70,
                                        height: 70,
                                        marginTop: "50px",
                                    }}
                                />
                            </div>
                            <div className="info-dop-content-information "></div>
                        </div>
                    </div>
                </div>
            )}

            <Modal active={modalActive} setActive={setModalActive} video={video.courseProfileVideo} />
        </div>
    );
};

export default ProfileCourse;
