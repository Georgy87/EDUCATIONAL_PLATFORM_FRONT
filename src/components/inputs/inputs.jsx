import React from "react";

export const InputForEmail = ({ input, meta, ...props }) => {
    const styleObj = {
        color: "red",
        marginTop: "10px",
    };

    return (
        <div>
            <div>
                <input {...input} {...props} />
            </div>
            <div style={meta.error ? styleObj : {}}>{meta.error}</div>
        </div>
    );
};

export const InputForPassword = ({ input, meta, ...props }) => {
    const styleObj = {
        color: "red",
        marginTop: "10px",
    };

    return (
        <div>
            <div>
                <input {...input} {...props} />
            </div>
            <div style={meta.error ? styleObj : {}}>{meta.error}</div>
        </div>
    );
};
