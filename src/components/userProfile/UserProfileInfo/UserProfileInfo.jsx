import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeInfoProfileUser } from '../../../store/ducks/user/saga';

import "./UserProfileInfo.css";

const UserProfileInfo = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [professionalСompetence, setProfessionalСompetence] = useState("");

    const dispatch = useDispatch();
    return (
        <>
            <div className="profile-info-container">
                <div className="profile-info-titles">
                    <p>Профиль</p>
                    <div class="photo-descr">Добавьте информацию о себе</div>
                </div>
                <div className="profile-info-add">
                    <input
                        placeholder="Имя"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder="Фамилия"
                        type="text"
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <textarea
                        placeholder="Профессиональная компетенция"
                        type="text"
                        onChange={(e) => setProfessionalСompetence(e.target.value)}
                    />
                    <button onClick={() => dispatch(changeInfoProfileUser(name, surname, professionalСompetence))}>Сохранить</button>
                </div>
            </div>
        </>
    );
};
export default UserProfileInfo;
