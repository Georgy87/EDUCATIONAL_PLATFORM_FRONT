import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useProfileCourseInfoDopStyles } from './theme';
import { fetchSetShoppingCartIds } from '../../../../store/ducks/user/actions';
import { useDispatch } from 'react-redux';
import { selectCourseProfile, selectUserAuth } from '../../../../store/ducks/courseProfile/selectors';
import { useSelector } from 'react-redux';
import { actions } from '../../../../store/ducks/courseProfile/actions';
import { Button } from '../../../button/Button';

import "./profileCourseInfoDop.css";

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
        dispatch(fetchSetShoppingCartIds(profileId));
        dispatch(actions.fetchGetTeacher(profile?.user));
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
                        disabled={!isAuth}
                        typeStyle="primary"
                        type={undefined}
                        action={onShoppingCartHandler}
                    >
                        Добавить в корзину
                    </Button>
                </div>
            </div>
        </>
    )
}
export default ProfileCourseInfoDop;
