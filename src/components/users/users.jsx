import React from 'react';
import style from './users.module.css';
import image from '../../img/no-image.jpeg';
import { Link } from 'react-router-dom';

const Users = (props) => {


    const { users, follow, unfollow } = props;

    
    return <div className={style.users}>
        {
            users.map(user => <li key={user.id} className={style.user}>
                <div className={style.image}>
                    <Link to={`profile/${user.id}`}>
                        <img className={style.photos} src={user.photos.small != null ? user.photos.small : image} alt='user' />
                    </Link>    
                </div>
                <div className={style.info}>
                    <span className={style.name}>{user.name}</span>
                    <div className={style.status}>{user.status}</div>
                    <div>
                        {
                            user.followed 
                            ? <button onClick={() => {follow(user.id)}} className={style.btn}>Followed</button>
                            : <button onClick={() => {unfollow(user.id)}} className={style.btn}>Unfollow</button>
                        }
                    </div>
                </div>
            </li>)
        } 
        </div>
};

export default Users;