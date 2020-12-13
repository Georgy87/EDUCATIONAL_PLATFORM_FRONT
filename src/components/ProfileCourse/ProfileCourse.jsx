import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Modal from "./modal/Modal";

import "./ProfileCourse.css";
import { getProfileCourse } from "../../store/ducks/courses/saga";
const ProfileCourse = (props) => {
    const state = useSelector((state) => state.course.courseProfile);
    const [modalActive, setModalActive] = useState(false);
    console.log(modalActive);
    let profileId = props.match.params.profileId;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileCourse(profileId));
    }, []);
    return (
        <div>
            {state !== null &&
                state.map((el) => {
                    return (
                        <div key={el._id}>
                            <div className="profile-container">
                                <div className="profile-info-main">
                                    <div className="small-description">
                                        <h1> {el.smallDescription}</h1>
                                        <p>{`Автор: ${el.author}`}</p>
                                    </div>
                                </div>
                                <div className="profile-info-middle"></div>
                                <div className="profile-info-dop" >
                                    <div
                                        className="info-dop-container"
                                        onClick={() => setModalActive(true)}
                                    >
                                        <img

                                            src={`http://localhost:5000/${el.photo}`}
                                        />
                                        <div className="info-dop-content">
                                            <PlayCircleFilledIcon style={{width: 70, height: 70, marginTop: '50px'}} />
                                        </div>
                                        <div className="info-dop-content-information ">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    );
};

export default ProfileCourse;
