import { IPosts } from '../../components/Entities/APIData/posts';

export const GET_POSTS = "GET_POSTS";

export interface IPostsTypes {
    GET_POSTS: {
        postsList: IPosts;
    }
}