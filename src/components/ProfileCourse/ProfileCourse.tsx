import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ModalForShoppingCart } from "./profileCourseMaterials/profileCourseInfoDop/modalForShoppingCart/ModalForShoppingCart";
import { actions } from "../../store/ducks/courseProfile/actions";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { RouteComponentProps } from 'react-router-dom';
import ProfileCourseMaterials from "./profileCourseMaterials/profileCourseMaterials/ProfileCourseMaterials";
import { selectCourseProfile, selectTeacherLoaded, selectVideo } from '../../store/ducks/courseProfile/selectors';
import ProfileCourseInfoDop from './profileCourseMaterials/profileCourseInfoDop/profileCourseInfoDop';
import { ModalVideoForProfileCourse } from "./profileCourseMaterials/profileCourseInfoDop/modalVideoForProfileCourse/ModalVideoForProfileCourse";

import "./ProfileCourse.css";

interface MatchParams {
    profileId: string;
}

interface Props extends RouteComponentProps<MatchParams> { }

const ProfileCourse: React.FC<Props> = (props): React.ReactElement => {
    const profile = useSelector(selectCourseProfile);
    const video = useSelector(selectVideo);
    const loaded = useSelector(selectTeacherLoaded);
    const [modalActiveVideoCourse, setModalActiveVideoCourse] = useState<boolean>(false);
    const [modalActiveShoppingCart, setModalActiveShoppingCart] = useState<boolean>(false);

    let userId: string;
    let profileId = props.match.params.profileId;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchGetProfileCourse(profileId));
    }, []);

    return (
        <>
            <div>
                <div className="profile-course-header">
                    <div className="profile-course-header-description">
                        {profile?.smallDescription}
                    </div>
                </div>
                {profile && (
                    <div className="profile-container">
                        <div className="profile-info-main">
                            <div className="small-description">
                                <h1> {profile?.smallDescription}</h1>
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
                                    >{` ${profile.author}`}</p>
                                </div>
                                <div className="profile-like-btn">
                                    <Button variant="outlined" color="primary" >
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
                            <ProfileCourseInfoDop
                                setModalActiveVideoCourse={setModalActiveVideoCourse}
                                setModalActiveShoppingCart={setModalActiveShoppingCart}
                                photo={profile.photo}
                                profileId={profileId} />
                        </div>
                    </div>
                )}
                <ModalVideoForProfileCourse
                    profileId={profileId}
                    active={modalActiveVideoCourse}
                    setActive={setModalActiveVideoCourse}
                    video={video}
                />
                <ModalForShoppingCart
                    profileId={profileId}
                    active={modalActiveShoppingCart}
                    setActive={setModalActiveShoppingCart}
                    video={video}
                />
                <div className="material-container">
                    <ProfileCourseMaterials fullDescription={profile?.fullDescription} />
                </div>
            </div>
        </>
    );
};

export default ProfileCourse;
