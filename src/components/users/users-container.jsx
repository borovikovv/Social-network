import React, { Component} from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { follow, unfollow, getUsersCount, 
    setUsers, setCurrentPage, toggleLoading } from '../../redux/usersReducer';
import * as axios from 'axios';
import Spinner from '../common/spinner/spinner';
import Paginator from '../common/paginator/paginator';


class UsersContainer extends Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.toggleLoading();
                this.props.setUsers(response.data.items);
                this.props.getUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (num) => {
        this.props.setCurrentPage(num)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleLoading();
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        const { users, currentPage, pageSize, 
                totalItemsCount, follow, unfollow, loading } = this.props;
                
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
                <Users  users={users}
                        follow={follow} 
                        unfollow={unfollow} />
            </>
        )
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        users: usersReducer.users,
        currentPage: usersReducer.currentPage,
        pageSize: usersReducer.pageSize,
        totalItemsCount: usersReducer.totalItemsCount,
        loading: usersReducer.loading
    };
};

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    getUsersCount,
    toggleLoading
};

export default connect( mapStateToProps, mapDispatchToProps)(UsersContainer);
