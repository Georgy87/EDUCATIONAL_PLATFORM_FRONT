import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Button } from '@material-ui/core';
import { useProfileCourseInfoDopStyles } from './theme';
import { setShoppingCartIds } from '../../../../store/ducks/user/saga';
import "./profileCourseInfoDop.css";
import { useDispatch } from 'react-redux';
import { selectCourseProfile, selectUserAuth } from '../../../../store/ducks/courseProfile/selectors';
import { useSelector } from 'react-redux';
import { getTeahcer } from '../../../../store/ducks/courseProfile/saga';

type PropsType = {
    setModalActiveVideoCourse: (value: boolean) => void;
    setModalActiveShoppingCart: (value: boolean) => void;
    photo: string;
    profileId: string;
}

const ProfileCourseInfoDop: React.FC<PropsType> = ({ setModalActiveVideoCourse, setModalActiveShoppingCart, photo, profileId }): React.ReactElement => {
    const classes = useProfileCourseInfoDopStyles();
    const profile = useSelector(selectCourseProfile);
    const isAuth = useSelector(selectUserAuth);

    const dispatch = useDispatch();

    const onShoppingCartHandler = (): void => {
        dispatch(setShoppingCartIds(profileId));
        dispatch(getTeahcer(profile?.user));
        setModalActiveShoppingCart(true);
    }
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
                <div className="info-dop-content" onClick={() => setModalActiveVideoCourse(true)}>
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
                        disabled={!isAuth}
                        className={classes.cartShopBtn}
                        onClick={onShoppingCartHandler}
                    >
                        Добавить в корзину
                    </Button>
                </div>
            </div>
        </>
    )
}
export default ProfileCourseInfoDop;
