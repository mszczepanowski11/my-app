import { ISingleUser} from '../../components/Entities/users';

export const GET_USERS = "GET_USERS";

export interface IUserTypes {
    GET_USERS: {
        data: {
            usersList: ISingleUser[];
            currentUser: ISingleUser;
        }
    }
}