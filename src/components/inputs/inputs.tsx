import React from "react";
import { Field, WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";
import { ValidatorsType } from "../validate/validateInput";

export interface WrappedFieldProps {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
}

export const FormControl: React.FC<WrappedFieldProps> = ({ input, meta, children }): React.ReactElement => {
    const styleObj = {
        color: "red",
        marginTop: "10px",
    };

    return (
        <div>
            <div>
                {children}
            </div>
            <div style={meta.error ? styleObj : {}}>{meta.error}</div>
        </div>
    );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export function createField<FormKeysType extends string> (
    name: FormKeysType,
    component: React.FC<WrappedFieldProps>,
    validators: Array<ValidatorsType>,
    { ...props },
    text = "") {
        return   (
            <div>
                <Field
                    name={name}
                    validate={validators}
                    component={component}
                    {...props}
                /> {text}
            </div>
        )
    }


// export const InputForEmail: React.FC<WrappedFieldProps> = ({ input, meta, ...props }): React.ReactElement => {
//     const styleObj = {
//         color: "red",
//         marginTop: "10px",
//     };
//     return (
//         <div>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             <div style={meta.error ? styleObj : {}}>{meta.error}</div>
//         </div>
//     );
// };


// export const InputForPassword: React.FC<WrappedFieldProps> = ({ input, meta, ...props }): React.ReactElement => {
//     const styleObj = {
//         color: "red",
//         marginTop: "10px",
//     };

//     return (
//         <div>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             <div style={meta.error ? styleObj : {}}>{meta.error}</div>
//         </div>
//     );
// };
