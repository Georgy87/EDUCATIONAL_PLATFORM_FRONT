import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Modal from "./modal/Modal";
import { getProfileCourse } from "../../store/ducks/courseProfile/saga";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./ProfileCourse.css";
import ProfileCourseMaterials from "./profileCourseMaterials/profileCourseMaterials/ProfileCourseMaterials";

const ProfileCourse = (props) => {
    const profile = useSelector((state) => state.courseProfile);
    const video = useSelector((state) => state.courseProfile);
    const [modalActive, setModalActive] = useState(false);

    let fullDescription;
    let smallDescription;
    let profileCourse;
    let userId;

    if (profile.courseProfile) {
        profileCourse =  profile.courseProfile;
        fullDescription = profile.courseProfile.fullDescription;
        smallDescription =  profile.courseProfile.smallDescription;
        userId = profile.courseProfile.user;
    }
    let profileId = props.match.params.profileId;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileCourse(profileId, userId));
    }, [userId]);
    
    return (
        <>
            <div>
                <div className="profile-course-header">
                    <div className="profile-course-header-description">
                        {smallDescription}
                    </div>
                </div>
                {profileCourse && (
                    <div className="profile-container">
                        <div className="profile-info-main">
                            <div className="small-description">
                                <h1> {profile.courseProfile.smallDescription}</h1>
                                <p style={{ color: "white" }}>
                                    {profileCourse.profession}
                                </p>
                                <div className="profile-author">
                                    <div
                                        style={{
                                            color: "white",
                                            marginRight: 6,
                                        }}
                                    >
                                        Автор:
                                    </div>
                                    <p
                                        style={{ color: "#8ed1dc" }}
                                    >{` ${profileCourse.author}`}</p>
                                </div>
                                <div className="profile-like-btn">
                                    <Button variant="outlined" color="primary">
                                        Добавить в избранное
                                        <FavoriteIcon
                                            style={{
                                                color: "#ec5252",
                                                marginLeft: "7px",
                                            }}
                                        />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="profile-info-middle"></div>
                        <div className="profile-info-dop">
                            <div
                                className="info-dop-container"
                                onClick={() => setModalActive(true)}
                            >
                                <img
                                    src={`http://localhost:5000/${profileCourse.photo}`}
                                />
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
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    video={video.courseProfileVideo}
                />
                <div className="material-container">
                    <ProfileCourseMaterials fullDescription={fullDescription} />
                </div>

            </div>
        </>
    );
};

export default ProfileCourse;
