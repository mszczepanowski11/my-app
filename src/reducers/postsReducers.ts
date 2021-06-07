import { IPosts} from '../components/Entities/APIData/posts';
import * as actionTypes from '../actions/actionsTypes/postsTypes';

export interface IPostsReducer {
    postsList: IPosts[];
}

const defaultState = (): IPostsReducer => ({
    postsList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_POSTS: {
            const payload: actionTypes.IPostsTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: payload.postsList,
            }
        }
        default: {
            return state;
        }
    }
}