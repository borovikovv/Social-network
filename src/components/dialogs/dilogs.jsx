import React from 'react';
import style from  './dialogs.module.css';
import image from './../../img/no-image.jpeg';

const Dialogs = () => {
    return (
        <div className={style.component}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    <div className={style.imageContainer}>
                        <img className={style.img} src={image} alt='img'/>
                    </div>
                    <span className={style.name}> Tom Tailor </span>
                </div>
                <div className={style.dialog}>
                    <div className={style.imageContainer}>
                        <img className={style.img} src={image} alt='img'/>
                    </div>
                    <span className={style.name}> Tom Tailor </span>
                </div>
                <div className={style.dialog}>
                    <div className={style.imageContainer}>
                        <img className={style.img} src={image} alt='img'/>
                    </div>
                    <span className={style.name}> Tom Tailor </span>
                </div>
                <div className={style.dialog}>
                    <div className={style.imageContainer}>
                        <img className={style.img} src={image} alt='img'/>
                    </div>
                    <span className={style.name}> Tom Tailor </span>
                </div>
                <div className={style.dialog}>
                    <div className={style.imageContainer}>
                        <img className={style.img} src={image} alt='img'/>
                    </div>
                    <span className={style.name}> Tom Tailor </span>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    <span className={`${style.text} ${style.speechBubble}`}>
                        lorem Ipsum ho ho ho
                    </span>
                </div>
                <div className={style.message}>
                    <span className={`${style.text} ${style.speechBubble}`}>
                        lorem Ipsum ho ho ho, 
                        jglj
                    </span>
                </div>
                <div className={style.message}>
                    <span className={`${style.text} ${style.speechBubble}`}>
                        lorem Ipsum ho ho ho
                    </span>
                </div>
                <div className={style.message}>
                    <span className={`${style.text} ${style.speechBubble}`}>
                        lorem Ipsum ho ho ho
                    </span>
                </div>
                <div className={style.message}>
                    <span className={`${style.text} ${style.speechBubble}`}>
                        lorem Ipsum ho ho ho
                    </span>
                </div>
            </div>
        </div>
)
};

export default Dialogs;