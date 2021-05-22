import { ISingleUser} from '../components/Entities/users';
import * as actionTypes from '../actions/actionsTypes/usersTypes';

export interface IUsersReducer {
    usersList: ISingleUser[],
    currentUser:ISingleUser
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    currentUser:null!
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const payload: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: payload.data.usersList,
                currentUser: payload.data.currentUser
            }
        }
        default: {
            return state;
        }
    }
}