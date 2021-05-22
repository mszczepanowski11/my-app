import { IComments} from '../components/Entities/comments';
import * as actionTypes from '../actions/actionsTypes/commentTypes';

export interface ICommentsReducer {
    commentsList: IComments[];
}

const defaultState = (): ICommentsReducer => ({
    commentsList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            const payload: actionTypes.ICommentsTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentsList: payload.commentsList,
            }
        }
        default: {
            return state;
        }
    }
}