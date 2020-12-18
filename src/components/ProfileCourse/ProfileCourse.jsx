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
    const profile = useSelector((state) => state.courseProfile.courseProfile);
    const video = useSelector((state) => state.courseProfile);
    const [modalActive, setModalActive] = useState(false);

    let profileId = props.match.params.profileId;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileCourse(profileId));
    }, []);
   
    return (
        <>
            <div>
                {profile && (
                    <div className="profile-container">
                        <div className="profile-info-main">
                            <div className="small-description">
                                <h1> {profile.smallDescription}</h1>
                                <p style={{ color: "white" }}>
                                    {profile.profession}
                                </p>
                                <div className="profile-author">
                                    <div
                                        style={{
                                            color: "white",
                                            marginRight: 6,
                                        }}
                                    >
                                        Автор:{" "}
                                    </div>
                                    <p
                                        style={{ color: "#8ed1dc" }}
                                    >{` ${profile.author}`}</p>
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
                                    src={`http://localhost:5000/${profile.photo}`}
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
                <div>
                    <ProfileCourseMaterials />
                </div>

            </div>
        </>
    );
};

export default ProfileCourse;
