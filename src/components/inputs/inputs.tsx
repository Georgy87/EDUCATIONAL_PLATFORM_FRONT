import React, { PropsWithChildren, ReactNode } from "react";
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";

export interface WrappedFieldProps {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
}
export const InputForEmail: React.FC<WrappedFieldProps>= ({ input, meta, ...props }): React.ReactElement => {
    console.log(input);

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

export const InputForPassword: React.FC<WrappedFieldProps> = ({ input, meta, ...props }): React.ReactElement => {
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
