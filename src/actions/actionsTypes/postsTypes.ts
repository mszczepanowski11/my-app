import { IPosts } from '../../components/Entities/posts';

export const GET_POSTS = "GET_POSTS";

export interface IPostsTypes {
    GET_POSTS: {
        postsList: IPosts;
    }
}