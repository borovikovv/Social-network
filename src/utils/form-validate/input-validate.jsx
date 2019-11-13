import React from 'react';
import style from './validate.module.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={(hasError ? style.error : '')}>
                <input {...props} {...input} />
            </div>
            { hasError &&
            <span className={style.message}>{meta.error}</span> }
        </div>
    );
}