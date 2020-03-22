import React from 'react';
import style from './validate.module.css';
import {Field} from "redux-form";

export const FormControl = ({input, meta, children}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={(hasError ? style.error : '')}>
                {children}
            </div>
            { hasError &&
            <span className={style.message}>{meta.error}</span> }
        </div>
    );
};

export const Input = (props) => {
    const {input, meta, child, ...restProps } = props;
    return (
        <div {...props}>
            <FormControl {...props}><input{...input} {...restProps}></input></FormControl>
        </div>
    );
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps } = props;
    return (
        <div {...props}>
            <FormControl {...props}> <textarea{...input} {...restProps}></textarea></FormControl>

        </div>
    );
};



export const createField = (placeholder, name, validators, component, props = {}, text='') => {
    return <div>
                <Field placeholder={placeholder}
                    name={name}
                    validate={validators}
                    component={component}
                    {...props} /> {text}
            </div>
};