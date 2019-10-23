import React, { Component } from 'react';
import style from './users.module.css';
import image from '../../img/no-image.jpeg';
import * as axios from 'axios';

export default class Users extends Component {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.getUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (num) => {
        this.props.setCurrentPage(num)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        const { users, currentPage, pageSize, totalUserCount } = this.props;
    
        let PageCount = Math.ceil(totalUserCount / pageSize);
        let pages = [];
        for(let i = 1; i <= PageCount; i++) {
            pages.push(i);
        }

        return <div className={style.users}>
            <div className={style.pagesPagination}>
                {
                    pages.map(page => {
                        return <span className={page === currentPage && style.pagePagination}
                                     onClick={()=> this.onPageChanged(page)}
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
                                ? <button onClick={() => {this.props.follow(user.id)}} className={style.btn}>Followed</button>
                                : <button onClick={() => {this.props.unfollow(user.id)}} className={style.btn}>Unfollow</button>
                            }
                        </div>
                    </div>
                </li>)
            } 
            </div>
    }
};