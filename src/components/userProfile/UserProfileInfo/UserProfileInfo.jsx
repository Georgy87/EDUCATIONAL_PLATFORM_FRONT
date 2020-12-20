import React, { useState } from "react";
import "./UserProfileInfo.css";

const UserProfileInfo = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [professionalСompetence, setProfessionalСompetence] = useState("");
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
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <button onClick={() => setProfessionalСompetence}>Сохранить</button>
                </div>
            </div>
        </>
    );
};
export default UserProfileInfo;
