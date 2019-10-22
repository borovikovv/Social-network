import React from 'react';
import style from './news.module.css';

const News = () => {
    return (
        <div className={style.news}>
            <p className={style.infoText}> You don't have News </p>
        </div>
    )
};

export default News;