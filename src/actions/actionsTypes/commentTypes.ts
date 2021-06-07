import { IComments } from '../../components/Entities/APIData/comments';

export const GET_COMMENTS = "GET_COMMENTS";

export interface ICommentsTypes {
    GET_COMMENTS: {
        commentsList: IComments;
        
    }
}