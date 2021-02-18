import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { fetchVerify } from '../../store/ducks/user/actions';
import { selectVerify } from '../../store/ducks/user/selectors';

import "./CheckEmailInfo.scss";

const renderTextInfo = ({ hash, verified }: { hash: string; verified: boolean | undefined }) => {
    if (hash) {
        if (verified) {
            return {
                status: 'success',
                title: 'Готово!',
                message: 'Аккаунт успешно подтвержден!',
            };
        } else {
            return {
                status: 'error',
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
    const verify = true;

    const hash = window.location.search.split('?hash=')[1];

    const [info, setInfo] = useState<{
        status: string;
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

    }, [verify])
    console.log(info);
    return (
        <div className="check-email">
            <div>Hello</div>
        </div>
    )
}



