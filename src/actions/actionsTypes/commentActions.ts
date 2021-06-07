import { Dispatch } from 'redux';
import * as actionTypes from '../actionsTypes/commentTypes';
import { IComments } from '../../components/Entities/APIData/comments';


export const getComments = (): Promise<IComments[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((commentsList: IComments[]) => {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                commentsList,              
            })
        })
}) as any;