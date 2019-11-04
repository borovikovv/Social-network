import React, { Component} from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { requestUsersThunkCreator, changePageThunkCreator,
    unfollowingSuccess, followingSuccess
} from '../../redux/usersReducer';
import Spinner from '../common/spinner/spinner';
import Paginator from '../common/paginator/paginator';
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/with-auth-redirect";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.requestUsersThunkCreator()
    }

    onPageChanged = (num) => {
        this.props.changePageThunkCreator(num, this.props.pageSize, this.props.currentPage)
    };

    render() {
        const { users, currentPage, pageSize, 
                totalItemsCount, loading, followingIsProgress,
                unfollowingSuccess, followingSuccess } = this.props;
                
        if(loading) {
            return <Spinner />
        }
        return (
            <>
                <Paginator
                    currentPage={currentPage}
                    pageSize={pageSize} 
                    totalItemsCount={totalItemsCount}
                    onPageChanged={this.onPageChanged} />
                <Users
                        followingIsProgress={followingIsProgress}
                        users={users}
                        unfollowingSuccess={unfollowingSuccess}
                        followingSuccess={followingSuccess}/>
            </>
        )
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        followingIsProgress: usersReducer.followingIsProgress,
        users: usersReducer.users,
        currentPage: usersReducer.currentPage,
        pageSize: usersReducer.pageSize,
        totalItemsCount: usersReducer.totalItemsCount,
        loading: usersReducer.loading
    };
};

const mapDispatchToProps = {
    requestUsersThunkCreator,
    changePageThunkCreator,
    unfollowingSuccess,
    followingSuccess
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)
