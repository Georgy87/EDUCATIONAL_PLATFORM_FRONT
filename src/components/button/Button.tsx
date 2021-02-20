import React from 'react';
import classNames from "classnames";

import "./Button.scss";

type PropsType = {
    typeStyle:  "primary" |  "secondary" | "primary" |  "teacher" | "login-register" | "create-lesson";
    action?: () => void;
    type: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
}

export const Button: React.FC<PropsType> = ({ type, children, typeStyle, action,  disabled }): React.ReactElement => {
    return (
        <button disabled={disabled} type={type} onClick={action} className={classNames('platform__button',
            {
                "platform__button--primary": typeStyle === "primary",
                "platform__button--secondary": typeStyle === "secondary",
                "platform__button--disabled": typeStyle === "primary" && disabled,
                "platform__button--teacher": typeStyle === "teacher",
                "platform__button--login-register": typeStyle === "login-register",
                "platform__button--create-lesson": typeStyle === "create-lesson"
            })}>
            {children}
        </button>
    )
}
