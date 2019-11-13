import { connect } from 'react-redux';
import MyPosts from './my-posts';
import { reset } from 'redux-form';
import { addPost } from '../../../redux/profileReducer';

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPost(text));
        },
        resetPostText: () => {
            dispatch(reset('postForm'));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;