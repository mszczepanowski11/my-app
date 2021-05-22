import { combineReducers } from 'redux';
import users, { IUsersReducer } from '../reducers/usersReducer';
import photos, { IPhotosReducer } from '../reducers/photosReducer';
import posts, { IPostsReducer } from '../reducers/postsReducers';
import comments, { ICommentsReducer } from '../reducers/commentsReducers';


export default combineReducers({
    users,
    photos,
    posts,
    comments
})


export interface IState {
    users: IUsersReducer,
    photos: IPhotosReducer,
    posts: IPostsReducer,
    comments: ICommentsReducer
}