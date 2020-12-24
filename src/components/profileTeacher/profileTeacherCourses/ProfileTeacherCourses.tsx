import React from 'react'
import "./ProfileTeacherCourses.css";

type PropsType = {
    photo: string;
    price: string;
    author: string;
    description: string;
    loaded: boolean;
}
const ProfileTeacherCourses: React.FC<PropsType> = ({ photo, price, author, description, loaded }) => {
    console.log(photo);
    return (
        <div>
            <div className="teacher-courses-wrap">
                {loaded && <img src={`http://localhost:5000/${photo}`} alt="photo" />}
                <p>{description}</p>
                <span>Автор: {author}</span>
            </div>
        </div>
    )
}
export default ProfileTeacherCourses;
