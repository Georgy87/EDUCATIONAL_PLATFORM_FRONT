import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Modal from "./modal/Modal";
import { getProfileCourse } from "../../store/ducks/courseProfile/saga";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { RouteComponentProps } from 'react-router-dom';
import ProfileCourseMaterials from "./profileCourseMaterials/profileCourseMaterials/ProfileCourseMaterials";
import { selectCourseProfile, selectTeacherLoaded, selectVideo } from '../../store/ducks/courseProfile/selectors';

import "./ProfileCourse.css";

interface MatchParams {
    profileId: string;
}

interface Props extends RouteComponentProps<MatchParams> { }

const ProfileCourse: React.FC<Props> = (props): React.ReactElement => {
    const profile = useSelector(selectCourseProfile);
    const video = useSelector(selectVideo);
    const loaded = useSelector(selectTeacherLoaded);
    const [modalActive, setModalActive] = useState<boolean>(false);

    let userId: string;
    let profileId = props.match.params.profileId;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileCourse(profileId, userId));
    }, []);
    console.log(profile?.photo)
    return (
        <>
            <div>
                <div className="profile-course-header">
                    <div className="profile-course-header-description">
                        {loaded && profile?.smallDescription}
                    </div>
                </div>
                {profile && (
                    <div className="profile-container">
                        <div className="profile-info-main">
                            <div className="small-description">
                                <h1> {loaded && profile?.smallDescription}</h1>
                                <p style={{ color: "white" }}>
                                    {profile && profile.profession}
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
                                    >{` ${loaded && profile.author}`}</p>
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
                    video={video}
                />
                <div className="material-container">
                    <ProfileCourseMaterials fullDescription={loaded && profile?.fullDescription} />
                </div>
            </div>
        </>
    );
};

export default ProfileCourse;
