import React from "react";
import "./ProfileCourse.css";
import { useSelector } from "react-redux";
import Font, { Text } from "react-font";
const ProfileCourse = () => {
    const state = useSelector((state) => state.course.courseProfile);
    
    return (
        <div>
            {state !== null &&
                state.map((el) => {
                    return (
                        <div key={el._id}>
                            <div className="profile-container">
                                <div className="profile-info-main">
                                    <div className="small-description">
                                        <img src={`http://localhost:5000/${el.name}`} />
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
