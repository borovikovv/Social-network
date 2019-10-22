import React from 'react';
import style from './music.module.css';

const Music = () => {
    return (
        <div className={style.music}>
            <p className={style.infoText}> You don't have music </p>
        </div>
    )
};

export default Music;