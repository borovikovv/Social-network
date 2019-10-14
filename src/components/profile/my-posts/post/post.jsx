import React from 'react';
import style from './post.module.css';
import ava from '../../../../img/AVA.jpeg';

const Post = ({message}) => {
    return(
        <div className={style.post}>
            <div className = {style.img}>
                <img className={style.img} src={ava} alt='img' />
            </div>
            <div className={style.text}>{message}</div>
        </div>
    )
}

export default Post;