import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Result, Button, Spin } from 'antd';
import { useHistory } from 'react-router-dom';

import { fetchVerify } from '../../store/ducks/user/actions';
import { selectVerify } from '../../store/ducks/user/selectors';

import "./CheckEmailInfo.scss";
import { ResultStatusType } from 'antd/lib/result';


const renderTextInfo = ({ hash, verified }: { hash: string; verified: boolean | undefined }): {
    status: ResultStatusType;
    title: string;
    message: string;
} => {
    if (hash) {
        if (verified) {
            return {
                status: 'success',
                title: 'Готово!',
                message: 'Аккаунт успешно подтвержден!',
            };
        } else {
            return {
                status: '403',
                title: 'Ошибка',
                message: 'Вы указали несуществующий или неверный хеш.',
            };
        }
    } else {
        return {
            status: 'info',
            title: 'Подтвердите почту',
            message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
        };
    }
};

export const CheckEmailInfo: React.FC = () => {
    const verify = useSelector(selectVerify);

    const hash = window.location.search.split('?hash=')[1];
    const history = useHistory();

    const [info, setInfo] = useState<{
        status: ResultStatusType;
        title: string;
        message: string;
    }>();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVerify(hash));
        if (verify) {
            const inf = renderTextInfo({ hash, verified: true });
            setInfo(inf);
        } else {
            const inf = renderTextInfo({ hash, verified: false });
            setInfo(inf);
        }
    }, [verify]);

    return (
        <div className="check-email">
            <Result
                status={info?.status}
                title={info?.message}
                extra={
                    verify ?
                        [
                            <Button type="primary" key="console" onClick={() => history.push('/login')}>
                                Логин
                            </Button>,
                        ] :
                        (   <Button type="primary" key="console" onClick={() => history.push('/registration')}>
                                Регистрация
                            </Button>
                        )
                }
            />,
        </div>
    )
}



