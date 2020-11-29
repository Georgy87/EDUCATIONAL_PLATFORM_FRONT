import React from "react";
import "./ProfileCourse.css";
import { useDispatch, useSelector } from "react-redux";
import Font, { Text } from "react-font";
import { getCourses, getProfileCourse } from "../../actions/courses";
import { useEffect } from "react";
const ProfileCourse = (props) => {
    const state = useSelector((state) => state.course.courseProfile);

    let profileId = props.match.params.profileId;

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getCourses());
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
                                        <img src={`http://localhost:5000/${el.photo}`} />
                                        <h1> {el.smallDescription}</h1>
                                        <p>{`Автор: ${el.author}`}</p>
                                    </div>
                                </div>
                                <div className="profile-info-middle"></div>
                                <div className="profile-info-dop"></div>
                            </div>
                            <div className="profile-container">
                                <div className="profile-second"></div>
                                <div className="profile-dop-second"></div>
                                <div className="profile-middle-second"></div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ProfileCourse;
