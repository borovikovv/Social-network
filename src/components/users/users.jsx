import React from 'react';
import style from './users.module.css';
import image from '../../img/no-image.jpeg';

const Users = (props) => {


    const { users, currentPage, pageSize, totalUserCount, follow, unfollow, onPageChanged } = props;

    let PageCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for(let i = 1; i <= PageCount; i++) {
        pages.push(i);
    }
    return <div className={style.users}>
        <div className={style.pagesPagination}>
            {
                pages.map(page => {
                    return <span key={page} 
                                className={page === currentPage && style.pagePagination}
                                 onClick={()=> onPageChanged(page)}
                                 style={{padding: '5px 10px 5px 10px'}}>
                                {page}
                            </span>
                })
            }
        </div>
        {
            users.map(user => <li key={user.id} className={style.user}>
                <div className={style.image}>
                    <img className={style.photos} src={user.photos.small != null ? user.photos.small : image} alt='user' />
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