import React, { PureComponent } from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { requestUsersThunkCreator, changePageThunkCreator,
    unfollowingSuccess, followingSuccess
} from '../../redux/usersReducer';
import Spinner from '../common/spinner/spinner';
import Paginator from '../common/paginator/paginator';
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/with-auth-redirect";
import {
    getCurrentPage,
    getFollowingIsProgress, getLoading,
    getPageSize,
    getTotalItemsCount,
    getUsers
} from "../../selectors/user-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/store";

type MapStateToPropsType = {
    users: Array<UserType>
    followingIsProgress: Array<number>
    currentPage: number
    pageSize: number
    totalItemsCount: number
    loading: boolean
};
type MapDispatchToPropsType = {
    unfollowingSuccess: (id: number) => void
    followingSuccess: (id: number) => void
    requestUsersThunkCreator: () => void
    changePageThunkCreator: (num: number, pageSizeNumber: number, currentPageNumber: number)=> void
};
type OwnPropsType = {};

type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class UsersContainer extends PureComponent<Props> {

    componentDidMount() {
        this.props.requestUsersThunkCreator()
    }

    onPageChanged = (num: number) => {
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

const mapStateToProps = (state: AppStateType) => {
    return {
        followingIsProgress: getFollowingIsProgress(state),
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        loading: getLoading(state)
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
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)
)(UsersContainer)
