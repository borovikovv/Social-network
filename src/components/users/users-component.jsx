import React, { Component} from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { followCreator, unfollowCreator, getUsersCountCreator, 
    setUsersCreator, setCurrentPageCreator } from '../../redux/usersReducer';
import * as axios from 'axios';


class UsersContainer extends Component {

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
        const { users, currentPage, pageSize, totalUserCount, follow, unfollow } = this.props;
        return (
            <Users  users={users}
                    currentPage={currentPage}
                    pageSize={pageSize} 
                    totalUserCount={totalUserCount} 
                    follow={follow} 
                    unfollow={unfollow}
                    onPageChanged={this.onPageChanged} />
        )
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        users: usersReducer.users,
        currentPage: usersReducer.currentPage,
        pageSize: usersReducer.pageSize,
        totalUserCount: usersReducer.totalUserCount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        },
        setCurrentPage: (count) => {
            dispatch(setCurrentPageCreator(count));
        },
        getUsersCount: (count) => {
            dispatch(getUsersCountCreator(count));
        }
    };
};

export default connect( mapStateToProps, mapDispatchToProps)(UsersContainer);
