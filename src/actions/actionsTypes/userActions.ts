import { Dispatch } from 'redux';
import * as actionTypes from '../actionsTypes/usersTypes';
import { ISingleUser } from '../../components/Entities/APIData/users';

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

     return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then((usersList: ISingleUser[]) => { 
            dispatch({
                type: actionTypes.GET_USERS, 
                data: {
                    usersList,
                    currentUser: usersList[0]
                }
            })
        })
}) as any;