import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Button } from '@material-ui/core';
import { useProfileCourseInfoDopStyles } from './theme';
import { setShoppingCartIds } from '../../../../store/ducks/user/saga';
import "./profileCourseInfoDop.css";
import { useDispatch } from 'react-redux';


type PropsType = {
    setModalActive: (value: boolean) => void;
    photo: string;
    profileId: string;
}
const ProfileCourseInfoDop: React.FC<PropsType> = ({ setModalActive, photo, profileId }): React.ReactElement => {
    const classes = useProfileCourseInfoDopStyles();
    const dispatch = useDispatch();
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
                        onClick={() => dispatch(setShoppingCartIds(profileId))}
                    >
                        Добавить в корзину
                    </Button>
                </div>
            </div>
        </>
    )
}
export default ProfileCourseInfoDop;
