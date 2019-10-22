import React from 'react';
import style from './users.module.css';

const Users = (props) => {
    const { users } = props;
    return <div className={style.users}>
        {
            users.map(user => <li key={user.id} className={style.user}>
                <div className={style.image}>
                    <img className={style.photos} src={user.photos} alt='user' />
                </div>
                <div className={style.info}>
                    <span className={style.name}>{user.name}</span>
                    <div className={style.status}>{user.status}</div>
                    <div>
                        {
                            user.followed 
                            ? <button onClick={() => {props.follow(user.id)}} className={style.btn}>Followed</button>
                            : <button onClick={() => {props.unfollow(user.id)}} className={style.btn}>Unfollow</button>
                        }
                    </div>
                </div>
            </li>)
        } 
        </div>
};

export default Users;