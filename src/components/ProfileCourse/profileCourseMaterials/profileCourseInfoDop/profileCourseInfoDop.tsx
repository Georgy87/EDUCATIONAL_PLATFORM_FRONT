import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Button } from '@material-ui/core';
import { useProfileCourseInfoDopStyles } from './theme';

import "./profileCourseInfoDop.css";

type PropsType = {
    setModalActive: (value: boolean) => void;
    photo: string;
}
const ProfileCourseInfoDop: React.FC<PropsType> = ({ setModalActive, photo }): React.ReactElement => {
    const classes = useProfileCourseInfoDopStyles();
    return (
        <>
            <div
                className="info-dop-container"
            >
                <div>
                    <img
                        src={`http://localhost:5000/${photo}`}
                    />
                </div>
                <div className="info-dop-content"  onClick={() => setModalActive(true)}>
                    <PlayCircleFilledIcon
                        style={{
                            width: 70,
                            height: 70,
                            marginTop: "50px",
                        }}
                    />
                </div>
                <div className="info-dop-content-information">
                    <Button
                        variant="contained"
                        className={classes.cartShopBtn}
                    >
                        Добавить в корзину
                    </Button>
                </div>
            </div>
        </>
    )
}
export default ProfileCourseInfoDop;
