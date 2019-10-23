import Users from './users';
import { connect } from 'react-redux';
import { followCreator, unfollowCreator, getUsersCountCreator, 
    setUsersCreator, setCurrentPageCreator } from '../../redux/usersReducer';

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

const UsersContainer = connect( mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
